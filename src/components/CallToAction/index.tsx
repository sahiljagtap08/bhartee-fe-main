import Image from "next/image";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="cta-box-gradient relative z-999 overflow-hidden rounded-[30px] bg-dark px-4 py-20 lg:py-25">
          {/* <!-- bg shapes --> */}

          <div className="absolute bottom-0 left-0 -z-1 h-full w-full bg-[url(/images/cta/grid.svg)] bg-cover bg-bottom bg-no-repeat"></div>

          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <span className="absolute bottom-0 left-1/2 -z-1 h-full w-full -translate-x-1/2">
              <Image
                src="/images/blur/blur-22.svg"
                alt="blur"
                fill
                className="max-w-none"
              />
            </span>
            <span className="absolute bottom-0 left-1/2 -z-1 h-full w-full -translate-x-1/2">
              <Image
                src="/images/blur/blur-23.svg"
                alt="blur"
                fill
                className="max-w-none"
              />
            </span>
            <span className="absolute bottom-0 left-1/2 -z-1 aspect-[530/253] max-w-[530px] -translate-x-1/2">
              <Image
                src="/images/blur/blur-24.svg"
                alt="blur"
                fill
                className="max-w-none"
              />
            </span>
          </div>

          {/* <!-- stars --> */}
          <div className="absolute -bottom-25 left-1/2 -z-1 h-60 w-full max-w-[482px] -translate-x-1/2 overflow-hidden">
            <div className="stars"></div>
            <div className="stars2"></div>
          </div>

          <div className="wow fadeInUp text-center">
            <span className="hero-subtitle-gradient relative mb-4 inline-flex items-center gap-2 rounded-full px-4.5 py-2 text-sm font-medium">
              <Image
                src="/images/hero/icon-title.svg"
                alt="icon"
                width={17}
                height={16}
              />

              <span className="hero-subtitle-text">No time?</span>
            </span>
            <h2 className="mb-4.5 text-2xl font-extrabold text-white sm:text-4xl xl:text-heading-2">
            Have a look at our quick video demo.
            </h2>
            <p className="mx-auto mb-9 max-w-[714px] font-medium">
              Watch a quick 5-minute demo of an interview
              conducted by our AI.
            </p>

            <Link
              href="https://youtube.com/video"
              className="hero-button-gradient inline-flex rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80"
            >
              Watch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
