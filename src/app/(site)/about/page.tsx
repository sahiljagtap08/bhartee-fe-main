import AboutSection from "@/components/About/AboutSection";
import Team from "@/components/About/Team";
import Video from "@/components/About/Video";
import Breadcrumb from "@/components/Breadcrumb";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Home/Clients";
import Features from "@/components/Home/Features";
import Reviews from "@/components/Home/Reviews";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Bhartee AI - Hire with confidence!",
  description: "Efficiency. Accuracy. Effectiveness of Talent Acquisition.",
  // other metadata
  // <Team /> remove team & clients for now <Clients />
  /*
  <section className="relative z-20 overflow-hidden pb-20">
        <Reviews />
      </section>
  */
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb pageTitle="About Bhartee" />
      <AboutSection />
      <Features />
      <Video />
     <section className="mb-30"></section>
      
      
      <CallToAction />
    </>
  );
};

export default AboutPage;
