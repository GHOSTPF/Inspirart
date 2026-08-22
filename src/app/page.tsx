import { SiteExperience } from "@/components/SiteExperience";
import { GoogleReviews } from "@/components/GoogleReviews";

export default function Home() {
  return <SiteExperience googleReviews={<GoogleReviews />} />;
}
