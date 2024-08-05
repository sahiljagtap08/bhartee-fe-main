import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Home/Clients";
import Features from "@/components/Home/Features";
import FeaturesList from "@/components/Home/FeaturesList";
import Hero from "@/components/Home/Hero";
import Reviews from "@/components/Home/Reviews";
import Support from "@/components/Support";
import Head from 'next/head';

// Metadata configuration
const metadata = {
  title: "Bhartee AI | Hire with confidence!",
  description: "Efficiency. Accuracy. Effectiveness of Talent Acquisition.",
  image: "/link.png", // Path to your image
  url: "https://bhartee.ai" // Your website URL
};

export default function Home() {
  const hasReviews = true;  // Change this based on whether you have reviews
  const hasClients = true;  // Change this based on whether you have clients

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <link rel="icon" href="/favicon.ico" /> {/* Ensure favicon.ico is in the public directory */}
      </Head>

      <Hero />
      <Features />
      <FeaturesList />

      {hasReviews && (
        <section className="relative z-20 overflow-hidden pb-20 pt-22.5 lg:pt-27.5 xl:pt-32.5 2xl:pt-45">
          <Reviews />
        </section>
      )}

      {hasClients && <Clients />}

      <Support />
      <CallToAction />
    </>
  );
}
