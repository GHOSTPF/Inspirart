const REVALIDATE_SECONDS = 60 * 60 * 6; // 6h — evita estourar a cota/custo da Places API

const FALLBACK_QUERY = "Inspirart Escola Artística Costa e Silva";

export type GoogleReview = {
  id: string;
  authorName: string;
  authorPhotoUrl: string | null;
  rating: number;
  relativeTime: string;
  text: string;
};

export type GooglePlaceReviews = {
  rating: number;
  userRatingCount: number;
  mapsUri: string;
  reviews: GoogleReview[];
};

type RawPlaceReview = {
  name?: string;
  relativePublishTimeDescription?: string;
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  authorAttribution?: { displayName?: string; photoUri?: string };
};

type RawPlaceDetails = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: RawPlaceReview[];
};

/** Link para a página de avaliações no Google Maps da unidade. */
export function googleReviewsUrl() {
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (placeId) {
    return `https://search.google.com/local/reviews?placeid=${placeId}`;
  }
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(FALLBACK_QUERY)}`;
}

/** Link direto para o formulário "Escrever avaliação" no Google. */
export function googleWriteReviewUrl() {
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (placeId) {
    return `https://search.google.com/local/writereview?placeid=${placeId}`;
  }
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(FALLBACK_QUERY)}`;
}

/**
 * Busca nota, total de avaliações e avaliações recentes via Google Places API (New).
 * Retorna null se GOOGLE_PLACES_API_KEY / GOOGLE_PLACE_ID não estiverem configurados
 * ou se a chamada falhar, para a UI cair num estado de fallback (sem dados inventados).
 */
export async function getGooglePlaceReviews(): Promise<GooglePlaceReviews | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) return null;

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews",
      },
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) return null;

    const data = (await res.json()) as RawPlaceDetails;

    const reviews: GoogleReview[] = (data.reviews ?? [])
      .map((r, i) => ({
        id: r.name ?? String(i),
        authorName: r.authorAttribution?.displayName ?? "Anônimo",
        authorPhotoUrl: r.authorAttribution?.photoUri ?? null,
        rating: r.rating ?? 0,
        relativeTime: r.relativePublishTimeDescription ?? "",
        text: r.text?.text ?? r.originalText?.text ?? "",
      }))
      .filter((r) => r.text.length > 0);

    return {
      rating: data.rating ?? 0,
      userRatingCount: data.userRatingCount ?? 0,
      mapsUri: data.googleMapsUri ?? googleReviewsUrl(),
      reviews,
    };
  } catch {
    return null;
  }
}
