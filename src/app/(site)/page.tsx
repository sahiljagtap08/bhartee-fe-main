import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Home/Clients";
import Features from "@/components/Home/Features";
import FeaturesList from "@/components/Home/FeaturesList";
import Hero from "@/components/Home/Hero";
import Reviews from "@/components/Home/Reviews";
import Support from "@/components/Support";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bhartee AI | Hire with confidence!",
  description: "Efficiency. Accuracy. Effectiveness of Talent Acquisition.",
  // other metadata

};
/*
use this section after FeaturesList in Home function and before clients when we actually have reviews:
<section className="relative z-20 overflow-hidden pb-20 pt-22.5 lg:pt-27.5 xl:pt-32.5 2xl:pt-45">
  <Reviews />
</section>
---------------------------------------------------------------------
and use clients when we actually have clients: after featureslist and <sec>reviews</sec> add clients: -->
<Clients />
*/
export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesList />
      <section className="mb-30"></section>
      <Support />
      <CallToAction />
    </>
  );
}
