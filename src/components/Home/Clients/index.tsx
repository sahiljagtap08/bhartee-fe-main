"use client";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleClient from "./SingleClient";
import clientsData from "./clientsData";

const Clients = () => {
  return (
    <section className="py-19">
      <div className="mx-auto max-w-[1104px] px-4 sm:px-8 xl:px-0">
        <div className="relative z-10 overflow-hidden">
          <span className="pointer-events-none absolute inset-0 left-0 top-1/2 z-10 block h-[37px] w-full max-w-[128px] -translate-y-1/2 bg-gradient-to-l from-dark/0 to-dark/100"></span>
          <span className="pointer-events-none absolute inset-0 left-auto top-1/2 z-10 block h-[37px] w-full max-w-[128px] -translate-y-1/2 bg-gradient-to-r from-dark/0 to-dark/100"></span>
          <div className="clients-carousel">
            <Swiper
              modules={[Autoplay]}
              slidesPerView="auto"
              spaceBetween={64}
              loop={true}
              speed={5000}
              noSwiping={true}
              noSwipingClass="swiper-slide w-auto"
              autoplay={{
                delay: 0,
                disableOnInteraction: true,
              }}
            >
              {clientsData.map((client) => (
                <SwiperSlide key={client.id}>
                  <SingleClient client={client} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
