"use client";

import SectionTitle from "@/components/Common/SectionTitle";
import { useEffect, useState } from "react";
import SingleReview from "./SingleReview";
import reviewsData from "./reviewsData";

const Reviews = () => {
  const [showContent, setShowContent] = useState(false);
  const [scrollContent, setScrollContent] = useState(false);

  const handleScrollContent = () => {
    if (window.scrollY >= 500) {
      setScrollContent(true);
    } else {
      setScrollContent(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollContent);
  });

  return (
    <>
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <SectionTitle
          subTitle="Wall of love"
          title="What Our User Says"
          paragraph="Build SaaS AI applications using OpenAI and Next.js, this kit comes with pre-configured and pre-built examples, making it easier to quickly kickstart your AI startup."
        />

        <div
          className={`grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3 ${
            !showContent ? "max-h-[855px] overflow-hidden" : ""
          }`}
        >
          <div className="space-y-7.5">
            {reviewsData.slice(0, 9).map((review) => (
              <SingleReview key={review.id} review={review} />
            ))}
          </div>

          <div className="hidden space-y-7.5 sm:block">
            {reviewsData.slice(9, 18).map((review) => (
              <SingleReview key={review.id} review={review} />
            ))}
          </div>

          <div className="hidden space-y-7.5 lg:block">
            {reviewsData.slice(18, 27).map((review) => (
              <SingleReview key={review.id} review={review} />
            ))}
          </div>
        </div>

        <div
          className={`pointer-events-none absolute inset-x-0 bottom-20 flex justify-center bg-gradient-to-t from-dark pb-8 pt-32 ${
            scrollContent ? "!opacity-100" : ""
          } ${
            showContent
              ? "-u-mt-52 sticky opacity-0 transition-opacity duration-300"
              : ""
          }`}
        >
          <button
            type="button"
            onClick={() => setShowContent(!showContent)}
            className={`button-border-gradient hover:button-gradient-hover pointer-events-auto relative top-20 mx-auto -mt-7.5 flex rounded-lg px-4.5 py-3 text-sm font-semibold text-white duration-300 ease-in ${
              showContent ? "translate-y-4 transition-transform" : ""
            } ${scrollContent ? "translate-y-0" : ""}`}
          >
            {showContent ? "Okay, I get the point" : "Show more..."}
          </button>
        </div>
      </div>
    </>
  );
};

export default Reviews;
