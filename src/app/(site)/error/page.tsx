import Breadcrumb from "@/components/Breadcrumb";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Error | Bhartee AI - Hire with confidence!",
  description: "Efficiency. Accuracy. Effectiveness of Talent Acquisition.",
  // other metadata
};
const ErrorPage = () => {
  return (
    <>
      <Breadcrumb pageTitle="Error! Something is weird." />

      <section className="pb-20 pt-17.5 lg:pb-25 lg:pt-22.5 xl:pb-30 xl:pt-27.5 2xl:pb-[150px]">
        <div
          className="wow fadeInUp mx-auto w-full max-w-[597px] px-4 text-center sm:px-8 lg:px-0"
          data-wow-delay="0.1s"
        >
          <div className="relative mx-auto mb-12.5 aspect-[191/143] w-full max-w-[382px]">
            <Image src="/images/404.svg" alt="404" fill />
          </div>
          <h2 className="mb-5.5 text-heading-3 font-bold text-white">
            Oops! Page Not Found.
          </h2>
          <p className="mb-9 font-medium">
            The page you are looking for is not available or has been moved. Try
            a different page or go to homepage with the button below.
          </p>
          <Link
            href="/"
            className="hero-button-gradient inline-flex rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80"
          >
            Go back to Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
