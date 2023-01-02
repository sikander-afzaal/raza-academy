import { useEffect, useState } from "react";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  const [showBg, setShowBg] = useState(false);
  useEffect(() => {
    const showBgFunc = () => {
      if (window.scrollY > 70) {
        setShowBg(true);
      } else {
        setShowBg(false);
      }
    };
    window.addEventListener("scroll", showBgFunc);
    return () => {
      window.removeEventListener("scroll", showBgFunc);
    };
  }, []);

  return (
    <div
      className={`wrapper transition-all duration-500 fixed top-0 py-5 z-[100]  left-0 ${
        showBg ? "bg-orange py-3" : "bg-transparent py-5"
      }`}
    >
      {headerToggle && (
        <div
          onClick={() => setHeaderToggle(false)}
          className="fixed top-0 left-0 h-full w-full bg-black opacity-60 z-[88]"
        ></div>
      )}
      <header className="w-full max-w-theme flex justify-between items-center gap-2">
        <img
          className={`object-contain transition-all ${
            showBg ? "w-[100px]" : "w-[140px]"
          }`}
          src="/logo.png"
          alt=""
        />
        <nav
          className={`flex justify-start md:p-0 py-[7rem] px-8 md:items-center z-[89] gap-8 md:flex-row flex-col md:static fixed transition-all duration-1000 md:w-auto top-0 md:max-w-none max-w-[400px] w-full md:bg-transparent bg-orange h-full md:h-auto items-center sm:items-start ${
            headerToggle ? "right-0" : "-right-[900px]"
          }`}
        >
          <a
            onClick={() => setHeaderToggle(false)}
            className={`text-white no-underline ${
              showBg ? "text-base" : "text-lg"
            } font-semibold transition-all`}
            href="#"
          >
            Home
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            className={`text-white no-underline ${
              showBg ? "text-base" : "text-lg"
            } font-semibold transition-all`}
            href="#"
          >
            IGCSE/O-Level
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            className={`text-white no-underline ${
              showBg ? "text-base" : "text-lg"
            } font-semibold transition-all`}
            href="#"
          >
            A-Level
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            className={`text-white no-underline ${
              showBg ? "text-base" : "text-lg"
            } font-semibold transition-all`}
            href="#"
          >
            About
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            className={`text-white no-underline ${
              showBg ? "text-base" : "text-lg"
            } font-semibold transition-all`}
            href="#"
          >
            Contact
          </a>
        </nav>
        {headerToggle ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            onClick={() => setHeaderToggle(false)}
            strokeWidth={1.5}
            stroke="white"
            className="w-8 h-8 cursor-pointer block md:hidden relative z-[90]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setHeaderToggle(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-8 h-8 cursor-pointer block md:hidden relative z-[90]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        )}
      </header>
    </div>
  );
};

export default Header;
