"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleFaq from "./SingleFaq";
import faqData from "./faqData";

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState(1);

  const handleFaqToggle = (id: number) => {
    activeFaq === id ? setActiveFaq(0) : setActiveFaq(id);
  };

  return (
    <section className="relative overflow-hidden pb-17.5 pt-20 lg:pb-22.5 lg:pt-25 xl:pb-27.5">
      {/* <!-- divider --> */}
      <div className="about-divider-gradient absolute left-1/2 top-0 h-[1px] w-full max-w-[1170px] -translate-x-1/2"></div>

      <div className="mx-auto max-w-[770px] px-4 sm:px-8 xl:px-0">
        <SectionTitle
          subTitle="Questions About our AI Tool?"
          title="Frequently Asked Questions"
          paragraph="Build SaaS AI applications using OpenAI and Next.js, this kit comes with pre-configured and pre-built examples, making it easier to quickly kickstart your AI startup."
        />

        <div className="wow fadeInUp">
          {faqData.map((faq: any, key: number) => (
            <SingleFaq
              key={key}
              faqData={{ ...faq, activeFaq, handleFaqToggle }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
