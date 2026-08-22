import Image from "next/image";
import { Reveal } from "./Reveal";
import { GoogleIcon, StarIcon } from "./icons/SocialIcons";
import { cn } from "@/lib/utils";
import {
  getGooglePlaceReviews,
  googleReviewsUrl,
  googleWriteReviewUrl,
} from "@/lib/google-reviews";

function Stars({ rating, className }: { rating: number; className?: string }) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          key={i}
          className={cn(
            "h-4 w-4",
            i < Math.round(rating) ? "text-salmon" : "text-ink/15",
          )}
        />
      ))}
    </div>
  );
}

export async function GoogleReviews() {
  const data = await getGooglePlaceReviews();
  const reviewsUrl = data?.mapsUri ?? googleReviewsUrl();
  const writeUrl = googleWriteReviewUrl();
  const featured = data?.reviews.slice(0, 3) ?? [];

  return (
    <section id="avaliacoes-google" className="bg-cream-soft py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-dark">
            Avaliações no Google
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
            O que dizem sobre a Inspirart.
          </h2>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-6 rounded-3xl bg-cream p-8 text-center shadow-sm ring-1 ring-ink/5 sm:flex-row sm:justify-between sm:text-left"
        >
          <div className="flex items-center gap-4">
            <GoogleIcon className="h-9 w-9 shrink-0" />
            <div>
              {data ? (
                <>
                  <div className="flex items-center gap-2">
                    <span className="font-display text-2xl font-bold text-ink">
                      {data.rating.toFixed(1)}
                    </span>
                    <Stars rating={data.rating} />
                  </div>
                  <p className="mt-1 text-sm text-ink-soft">
                    {data.userRatingCount} avaliações no Google
                  </p>
                </>
              ) : (
                <p className="max-w-[28ch] text-sm text-ink-soft">
                  Veja o que as famílias dizem e deixe sua avaliação da Inspirart no Google.
                </p>
              )}
            </div>
          </div>

          <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row">
            <a
              href={reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ink px-5 py-2.5 text-center text-sm font-semibold text-cream-soft transition-colors hover:bg-ink/90"
            >
              Ver avaliações
            </a>
            <a
              href={writeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink/15 px-5 py-2.5 text-center text-sm font-semibold text-ink transition-colors hover:bg-ink/5"
            >
              Deixar minha avaliação
            </a>
          </div>
        </Reveal>

        {featured.length > 0 && (
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featured.map((review, i) => (
              <Reveal
                key={review.id}
                delay={0.1 * (i + 1)}
                className="flex h-full flex-col rounded-3xl bg-cream p-8 shadow-sm ring-1 ring-ink/5"
              >
                <div className="flex items-center gap-3">
                  {review.authorPhotoUrl ? (
                    <Image
                      src={review.authorPhotoUrl}
                      alt=""
                      width={40}
                      height={40}
                      className="h-10 w-10 shrink-0 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-salmon-soft font-display text-sm font-semibold text-coral-dark">
                      {review.authorName.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="font-display text-sm font-semibold text-ink">
                      {review.authorName}
                    </p>
                    <Stars rating={review.rating} />
                  </div>
                </div>
                <p className="mt-5 line-clamp-6 grow text-sm leading-relaxed text-ink-soft">
                  {review.text}
                </p>
                <p className="mt-4 text-xs text-ink-soft/70">{review.relativeTime}</p>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
