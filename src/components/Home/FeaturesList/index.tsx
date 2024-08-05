import Image from "next/image";
import Link from "next/link";
import Highlighter from "./HighLighter";

const FeaturesList = () => {
  return (
    <section className="pt-12.5">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="grid gap-7.5 sm:grid-cols-12">
          {/* <!-- features item --> */}
          <div className="sm:col-span-12">
            <Highlighter>
              <div className="features-box-border relative rounded-3xl">
                <div className="box-hover relative overflow-hidden rounded-3xl p-10 xl:p-15">
                  <div className="relative z-20 flex items-center justify-between">
                    <div className="w-full max-w-[477px]">
                      <span className="hero-subtitle-gradient relative mb-4 inline-flex items-center gap-2 rounded-full px-4.5 py-2 text-sm font-medium">
                        <Image
                          src="/images/hero/icon-title.svg"
                          alt="icon"
                          width={16}
                          height={16}
                        />

                        <span className="hero-subtitle-text">
                          Kickstart Recruitment
                        </span>
                      </span>
                      <h3 className="mb-4.5 text-heading-4 font-bold text-white">
                        Seamless ATS Integrations
                      </h3>
                      <p className="mb-10 font-medium">
                      Bhartee seamlessly connects with your preferred ATS, allowing you to maintain your existing workflows without disruption.
                      </p>
                      <Link
                        href="/getstarted"
                        className="features-button-gradient relative inline-flex items-center gap-1.5 rounded-full px-6 py-3 text-sm text-white duration-300 ease-in hover:shadow-button"
                      >
                        explore more
                        <svg
                          width="14"
                          height="12"
                          viewBox="0 0 14 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3992 5.60002L8.22422 0.350024C7.99922 0.125024 7.64922 0.125024 7.42422 0.350024C7.19922 0.575024 7.19922 0.925025 7.42422 1.15002L11.6242 5.42503H0.999219C0.699219 5.42503 0.449219 5.67502 0.449219 5.97502C0.449219 6.27502 0.699219 6.55003 0.999219 6.55003H11.6742L7.42422 10.875C7.19922 11.1 7.19922 11.45 7.42422 11.675C7.52422 11.775 7.67422 11.825 7.82422 11.825C7.97422 11.825 8.12422 11.775 8.22422 11.65L13.3992 6.40002C13.6242 6.17502 13.6242 5.82502 13.3992 5.60002Z"
                            fill="white"
                          />
                        </svg>
                      </Link>
                    </div>

                    <div className="relative hidden aspect-square w-full max-w-[428px] sm:block">
                      <Image
                        src="/images/features/big-icon.svg"
                        alt="icon"
                        fill
                      />
                    </div>
                  </div>

                  {/* <!-- bg shapes --> */}
                  <div className="pointer-events-none absolute inset-0 -z-10 -mx-28 overflow-hidden">
                    <span className="absolute bottom-0 right-0">
                      <Image
                        src="/images/features/shape-01.png"
                        alt="shape"
                        width={282}
                        height={226}
                      />
                    </span>
                    <span className="absolute left-0 top-0 aspect-[1170/192] w-full">
                      <Image
                        src="/images/features/shape-02.svg"
                        alt="shape"
                        fill
                      />
                    </span>
                    <span className="absolute bottom-0 left-1/2 h-full w-full -translate-x-1/2">
                      <Image
                        src="/images/blur/blur-03.svg"
                        alt="blur"
                        fill
                        className="max-w-none"
                      />
                    </span>
                    <span className="absolute bottom-0 left-1/2 h-full w-full -translate-x-1/2">
                      <Image
                        src="/images/blur/blur-04.svg"
                        alt="blur"
                        fill
                        className="max-w-none"
                      />
                    </span>
                    <span className="absolute bottom-0 left-1/2 aspect-[530/270] w-full max-w-[530px] -translate-x-1/2">
                      <Image
                        src="/images/blur/blur-05.svg"
                        alt="blur"
                        fill
                        className="max-w-none"
                      />
                    </span>
                    <span className="absolute right-0 top-0 aspect-[580/430] w-full max-w-[580px]">
                      <Image
                        src="/images/features/shape-03.svg"
                        alt="shape"
                        fill
                        className="max-w-none"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </Highlighter>
          </div>

          {/* <!-- features item --> */}
          <div className="sm:col-span-7">
            <Highlighter>
              <div className="features-box-border relative rounded-3xl">
                <div className="box-hover box-hover-small relative overflow-hidden rounded-3xl px-11 pb-14 pt-12.5">
                  <div className="relative z-20">
                    <span className="icon-border relative mx-auto mb-13.5 inline-flex h-20 w-full max-w-[80px] items-center justify-center rounded-full">
                      <Image
                        src="/images/features/icon-04.svg"
                        alt="icon"
                        width={32}
                        height={32}
                      />
                    </span>

                    <h3 className="mb-4.5 text-heading-6 font-semibold text-white">
                    Advanced Analytics
                    </h3>
                    <p className="font-medium">
                    Gain insights into hiring trends, candidate performance, and recruitment metrics.
                    </p>
                  </div>

                  {/* <!-- bg shapes --> */}
                  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                    <span className="absolute bottom-0 left-0 h-full w-full bg-[url(/images/blur/blur-06.svg)] bg-cover bg-center bg-no-repeat"></span>

                    <span className="absolute right-0 top-0 h-full w-full bg-[url(/images/blur/blur-07.svg)] bg-cover bg-center bg-no-repeat"></span>

                    <span className="absolute right-[16%] top-[16%]">
                      <Image
                        src="/images/features/shape-04.svg"
                        alt="shape"
                        width={250}
                        height={135}
                      />
                    </span>
                    <span className="absolute bottom-0 left-0 aspect-[521/335] w-full max-w-[521px]">
                      <Image
                        src="/images/blur/blur-08.svg"
                        alt="blur"
                        fill
                        className="max-w-none"
                      />
                    </span>
                    <span className="absolute bottom-0 left-0 aspect-[287/256] w-full max-w-[287px]">
                      <Image
                        src="/images/blur/blur-09.svg"
                        alt="blur"
                        fill
                        className="max-w-none"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </Highlighter>
          </div>

          {/* <!-- features item --> */}
          <div className="sm:col-span-5">
            <Highlighter>
              <div className="features-box-border relative rounded-3xl">
                <div className="box-hover box-hover-small relative overflow-hidden rounded-3xl px-11 pb-14 pt-12.5">
                  <div className="relative z-20">
                    <span className="icon-border relative mx-auto mb-13.5 inline-flex h-20 w-full max-w-[80px] items-center justify-center rounded-full">
                      <Image
                        src="/images/features/icon-07.svg"
                        alt="icon"
                        width={32}
                        height={32}
                      />
                    </span>

                    <h3 className="mb-4.5 text-heading-6 font-semibold text-white">
                    Automated Candidate Screening
                    </h3>
                    <p className="font-medium">
                    Quickly filter and rank candidates based on their qualifications and fit for the role.
                    </p>
                  </div>

                  {/* <!-- bg shapes --> */}
                  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                    <span className="absolute right-[14%] top-[17%]">
                      <Image
                        src="/images/features/shape-05.svg"
                        alt="shape"
                        width={178}
                        height={102}
                      />
                    </span>

                    <span className="absolute bottom-0 left-0 h-full w-full bg-[url(/images/blur/blur-10.svg)] bg-cover bg-center bg-no-repeat"></span>

                    <span className="absolute right-0 top-0 aspect-[394/336] w-full max-w-[394px]">
                      <Image
                        src="/images/blur/blur-11.svg"
                        alt="blur"
                        fill
                        className="max-w-none"
                      />
                    </span>
                    <span className="absolute right-0 top-0">
                      <Image
                        src="/images/blur/blur-12.svg"
                        alt="blur"
                        className="max-w-none"
                        width={160}
                        height={303}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </Highlighter>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesList;
