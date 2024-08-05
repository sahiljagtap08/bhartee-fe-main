import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo/logo.svg";
import FooterLinkList from "./FooterLinkList";
import { companiesLink, productsLink, supportsLink } from "./linksData";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 pb-17.5 lg:pb-22.5 xl:pb-27.5">
        {/* <!-- bg shapes --> */}
        <div className="absolute bottom-0 left-0 -z-1 flex w-full flex-col gap-3 opacity-50">
          <div className="footer-bg-gradient h-[1.24px] w-full"></div>
          <div className="footer-bg-gradient h-[2.47px] w-full"></div>
          <div className="footer-bg-gradient h-[3.71px] w-full"></div>
          <div className="footer-bg-gradient h-[4.99px] w-full"></div>
          <div className="footer-bg-gradient h-[6.19px] w-full"></div>
          <div className="footer-bg-gradient h-[7.42px] w-full"></div>
          <div className="footer-bg-gradient h-[8.66px] w-full"></div>
          <div className="footer-bg-gradient h-[9.90px] w-full"></div>
          <div className="footer-bg-gradient h-[13px] w-full"></div>
        </div>

        <div className="relative mx-auto max-w-[1170px] px-4 pt-17.5 sm:px-8 xl:px-0">
          <div className="footer-divider-gradient absolute left-0 top-0 h-[1px] w-full"></div>

          <div className="flex flex-wrap justify-between">
            <div className="mb-10 w-full max-w-[520px]">
              <Link href="/" className="mb-8.5 inline-block">
                <Image src={logo} alt="Logo" width={164} height={36} />
              </Link>

              

              <div className="flex items-center gap-5">
                <a
                  href="#"
                  aria-label="facebook"
                  className="duration-300 ease-in hover:text-white"
                >
                  <svg
                    className="fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 21.9506C18.0533 21.4489 22 17.1853 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 16.8379 5.43552 20.8734 10 21.8V16H7V13H10V9.79586C10 7.47449 11.9695 5.64064 14.285 5.80603L17 5.99996V8.99996H15C13.8954 8.99996 13 9.89539 13 11V13H17L16 16H13V21.9506Z"
                      fill=""
                    />
                  </svg>
                </a>

                <a
                  href="#"
                  aria-label="twitter"
                  className="duration-300 ease-in hover:text-white"
                >
                  <svg
                    className="fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.6125 21.5251C16.4625 21.5251 21.2625 14.2126 21.2625 7.87509C21.2625 7.72509 21.2625 7.46259 21.225 7.23759C22.1625 6.56259 22.9875 5.70009 23.625 4.76259C22.725 5.17509 21.825 5.40009 20.8875 5.51259C21.9 4.91259 22.65 3.97509 22.9875 2.8501C22.05 3.3751 21.075 3.78759 19.9125 4.01259C19.0125 3.0751 17.8125 2.4751 16.425 2.4751C13.7625 2.4751 11.5875 4.65009 11.5875 7.31259C11.5875 7.68759 11.625 8.06259 11.7 8.43759C7.8375 8.17509 4.3125 6.26259 1.9125 3.3751C1.5 4.12509 1.275 4.91259 1.275 5.77509C1.275 7.46259 2.1375 8.88759 3.45 9.75009C2.6625 9.71259 1.9125 9.48759 1.275 9.15009C1.275 9.18759 1.275 9.18759 1.275 9.18759C1.275 11.4751 2.925 13.4626 5.1 13.9126C4.6875 14.0251 4.2375 14.0626 3.9 14.0626C3.6 14.0626 3.2625 14.0251 3 13.9501C3.6375 15.8626 5.4 17.2501 7.5 17.2876C5.85 18.5626 3.7875 19.3501 1.575 19.3501C1.125 19.4251 0.75 19.3501 0.375 19.3126C2.4 20.7376 4.9125 21.5251 7.6125 21.5251Z"
                      fill=""
                    />
                  </svg>
                </a>

                <a
                  href="#"
                  aria-label="github"
                  className="duration-300 ease-in hover:text-white"
                >
                  <svg
                    className="fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_368_11839)">
                      <path
                        d="M12 0.674805C5.625 0.674805 0.375 5.8498 0.375 12.2998C0.375 17.3998 3.7125 21.7498 8.3625 23.3248C8.9625 23.4373 9.15 23.0623 9.15 22.7998C9.15 22.5373 9.15 21.7873 9.1125 20.7748C5.8875 21.5248 5.2125 19.1998 5.2125 19.1998C4.6875 17.8873 3.9 17.5123 3.9 17.5123C2.85 16.7623 3.9375 16.7623 3.9375 16.7623C5.1 16.7998 5.7375 17.9623 5.7375 17.9623C6.75 19.7623 8.475 19.2373 9.1125 18.8998C9.225 18.1498 9.525 17.6248 9.8625 17.3248C7.3125 17.0623 4.575 16.0498 4.575 11.6248C4.575 10.3498 5.0625 9.3373 5.775 8.5498C5.6625 8.2873 5.25 7.0873 5.8875 5.4748C5.8875 5.4748 6.9 5.1748 9.1125 6.6748C10.05 6.4123 11.025 6.2623 12.0375 6.2623C13.05 6.2623 14.0625 6.3748 14.9625 6.6748C17.175 5.2123 18.15 5.4748 18.15 5.4748C18.7875 7.0498 18.4125 8.2873 18.2625 8.5498C19.0125 9.3373 19.4625 10.3873 19.4625 11.6248C19.4625 16.0498 16.725 17.0623 14.175 17.3248C14.5875 17.6998 14.9625 18.4498 14.9625 19.4998C14.9625 21.0748 14.925 22.3123 14.925 22.6873C14.925 22.9873 15.15 23.3248 15.7125 23.2123C20.2875 21.6748 23.625 17.3623 23.625 12.2248C23.5875 5.8498 18.375 0.674805 12 0.674805Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_368_11839">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>

              <p className="mt-5.5 font-medium">
                Bhartee LLC. All rights reserved.
              </p>
            </div>

            <div className="w-full max-w-[571px]">
              <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
                <FooterLinkList title="Product" links={productsLink} />

                <FooterLinkList title="Company" links={companiesLink} />

      
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
