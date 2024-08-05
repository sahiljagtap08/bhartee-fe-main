"use client";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import { useState } from "react";
//video thumbnail look for IMG
const Video = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <section className="pt-12">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="relative z-999 aspect-[39/20] rounded-3xl">
          <button
            aria-label="video play button"
            onClick={() => setToggler(!toggler)}
            className="absolute left-1/2 top-1/2 z-10 flex h-27.5 w-27.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-b from-[#000] to-[#00FF00] shadow-video"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.1688 16.8077L7.26999 27.1727C5.73764 28.0601 3.75 27.0394 3.75 25.3651V4.63517C3.75 2.96091 5.73764 1.94018 7.26997 2.82754L25.1688 13.1925C26.6104 14.0274 26.6104 15.9729 25.1688 16.8077Z"
                fill="white"
              />
            </svg>
          </button>
          <span className="absolute left-1/2 top-1/2 z-1 block h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] backdrop-blur-[5px]"></span>
          <Image src="/images/video/video.png" fill alt="video" /> 
        </div>
      </div>

      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=xcJtL7QggT"]}
      />
    </section>
  );
};

export default Video;
