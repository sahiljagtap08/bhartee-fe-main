import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`${
        isVisible ? "flex" : "hidden"
      } shadow-solid-5 fixed bottom-8 right-8 z-999 h-10 w-10 items-center justify-center rounded-[4px] bg-green-500 hover:opacity-70`}
    >
      <div
        onClick={scrollToTop}
        aria-label="scroll to top"
        className="bg-primary hover:shadow-signUp flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80"
      >
        <svg
          className="h-5 w-5 fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
        </svg>
      </div>
    </div>
  );
}
