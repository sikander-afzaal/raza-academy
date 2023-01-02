const Footer = () => {
  return (
    <div className="wrapper bg-blackBg bg-cover pt-[50px] pb-5 sm:pt-[80px] mt-[80px]">
      <footer className="w-full max-w-theme flex justify-center gap-8 items-center flex-col">
        <div className="flex justify-between items-center xl:items-start xl:flex-row flex-col w-full gap-14 xl:gap-4">
          <div className="flex justify-start items-center text-center xl:text-left xl:items-start flex-col gap-4">
            <h3 className="font-bold text-white text-[30px] xl:text-[40px]">
              About
            </h3>
            <p className="text-white font-normal text-[20px] max-w-[500px]">
              <strong>Sir Raza </strong> is a highly qualified and experienced
              computer science teacher who is known for his ability to inspire
              and motivate his students to reach their full potential.
            </p>
          </div>
          <div className="flex justify-start items-center flex-col gap-4">
            <h3 className="font-bold text-white text-[30px] xl:text-[40px]">
              Contact
            </h3>
            <div className="flex justify-start items-start flex-col gap-9 mt-2">
              <div className="flex justify-center w-full xl:w-auto xl:justify-start items-center gap-4">
                <img
                  src="/phone.png"
                  className="w-[25px] xl:w-[35px] object-contain"
                  alt=""
                />
                <p className="text-white text-[20px]">+923002435238</p>
              </div>
              <div className="flex justify-center w-full xl:w-auto xl:justify-start items-center gap-4">
                <img
                  src="/pin.png"
                  className="w-[25px] xl:w-[35px] object-contain"
                  alt=""
                />
                <p className="text-white text-[20px]">Karachi, Pakistan</p>
              </div>
              <div className="flex justify-center w-full xl:w-auto xl:justify-start items-center gap-4">
                <img
                  src="/mail.png"
                  className="w-[25px] xl:w-[35px] object-contain"
                  alt=""
                />
                <p className="text-white text-[20px]">
                  info@SirRazaAcademy.com
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center flex-col gap-6">
            <h3 className="font-bold text-white text-[30px] xl:text-[40px]">
              QUICK LINKS
            </h3>
            <a href="#" className="text-[20px] no-underline text-white">
              Home
            </a>
            <a href="#" className="text-[20px] no-underline text-white">
              About Us
            </a>
            <a href="#" className="text-[20px] no-underline text-white">
              Apply
            </a>
            <a href="#" className="text-[20px] no-underline text-white">
              News and Events
            </a>
            <a href="#" className="text-[20px] no-underline text-white">
              Area Of Study
            </a>
          </div>
        </div>
        <div
          onClick={() => window.scrollTo(0, 0)}
          className="flex cursor-pointer justify-center xl:mt-0 mt-5 items-center flex-col gap-4"
        >
          <img src="/scroll.png" className="w-[55px] object-contain" alt="" />
          <p className="text-white font-medium text-[20px]">Scroll To Top</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
