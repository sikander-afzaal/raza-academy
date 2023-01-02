const About = () => {
  return (
    <div className="wrapper mt-[70px] xl:mt-[120px]">
      <div className="flex justify-start items-center flex-col w-full max-w-theme">
        <div className="flex justify-start items-center flex-col w-full  xl:gap-[70px]">
          <h2 className="text-lightOrange font-semibold text-[40px] sm:text-[50px] md:text-[64px]">
            Lorem Ipsum
          </h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-y-10 gap-x-4 place-items-center xl:flex w-full justify-between items-stretch xl:gap-7">
            <div className="flex gap-5 justify-start w-full max-w-[445px] items-center text-center flex-col p-8 rounded-tl-[50px] rounded-br-[50px] border-solid border-2 border-lightOrange">
              <img
                src="/search.png"
                className="object-contain w-[60px]"
                alt=""
              />
              <h4 className="text-black text-2xl sm:text-[30px] font-semibold">
                Why Us?
              </h4>
              <p className="font-normal text-base sm:text-lg text-black">
                Sir Raza Academy is a great place to study computer science, and
                other subjects academy offer students the opportunity to learn
                from a skilled and dedicated teacher, in a supportive and
                engaging environment
              </p>
            </div>
            <div className="flex gap-5 justify-start w-full max-w-[445px] items-center text-center flex-col p-8 rounded-tl-[50px] rounded-br-[50px] border-solid border-2 border-lightOrange">
              <img src="/book.png" className="object-contain w-[60px]" alt="" />
              <h4 className="text-black text-2xl sm:text-[30px] font-semibold">
                Scholarships{" "}
              </h4>
              <p className="font-normal text-base sm:text-lg text-black">
                These scholarships may be based on financial need, academic
                merit, or a combination of both.
              </p>
              <button className="w-full max-w-[180px] rounded-full bg-cream shadow-btn h-[60px] text-lightOrange border-none text-[20px] font-medium">
                Details
              </button>
            </div>
            <div className="flex gap-5 justify-start w-full max-w-[445px] col-span-1 md:col-span-2 items-center text-center flex-col p-8 rounded-tl-[50px] rounded-br-[50px] border-solid border-2 border-lightOrange">
              <img src="/join.png" className="object-contain w-[60px]" alt="" />
              <h4 className="text-black text-2xl sm:text-[30px] font-semibold">
                Ready to Join?
              </h4>
              <p className="font-normal text-base sm:text-lg text-black">
                We believe that education has the power to transform lives, and
                we are excited to help you achieve your academic and
                professional aspirations. If you are ready to join us, we
                encourage you to apply today
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-[60px] sm:gap-[80px] items-center  xl:flex-row flex-col xl:items-stretch w-full mt-[60px] xl:mt-[100px]">
          <div className="flex justify-between items-center gap-5 overflow-hidden flex-col py-6 bg-white w-full max-w-[500px] rounded-[25px] shadow-about">
            <div className="relative w-full mt-8">
              <div className="bg-orange w-full h-[50px] sm:h-[60px]"></div>
              <img
                src="/profile.png"
                className="absolute object-contain w-[100px] sm:w-[120px] left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
                alt=""
              />
            </div>
            <h3 className="text-center 2xl:m-0 mt-5 leading-[1.3] text-black  font-semibold text-3xl sm:text-[35px]">
              Hello! <br /> I am Syed <br /> Muhammad Raza{" "}
            </h3>
            <div className="w-full sm:m-0 mt-3  gap-8 px-5 flex justify-start items-start flex-col">
              <div className="flex justify-start items-center w-full gap-4">
                <img
                  src="/check.png"
                  className="w-[30px] object-contain"
                  alt=""
                />
                <p className="text-base sm:text-xl font-medium text-black leading-[1]">
                  MS-Information technology
                </p>
              </div>
              <div className="flex justify-start items-center w-full gap-4">
                <img
                  src="/check.png"
                  className="w-[30px] object-contain"
                  alt=""
                />
                <p className="text-base sm:text-xl font-medium text-black leading-[1]">
                  Microsoft Certified System Engineer
                </p>
              </div>
              <div className="flex justify-start items-center w-full gap-4">
                <img
                  src="/check.png"
                  className="w-[30px] object-contain"
                  alt=""
                />
                <p className="text-base sm:text-xl font-medium text-black leading-[1]">
                  Microsoft Certified System Engineer
                </p>
              </div>
              <div className="flex justify-start items-center w-full gap-4">
                <img
                  src="/check.png"
                  className="w-[30px] object-contain"
                  alt=""
                />
                <p className="text-base sm:text-xl font-medium text-black leading-[1]">
                  Microsoft Certified System Engineer
                </p>
              </div>
            </div>
            <div className="flex sm:m-0 mt-4 justify-center  items-center gap-8 px-5 w-full">
              <a href="#">
                <img
                  src="/linkedin.png"
                  className="w-[25px] sm:w-[30px] h-[25px] sm:h-[30px] object-contain"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  src="/twitter.png"
                  className="w-[25px] sm:w-[30px] h-[25px] sm:h-[30px] object-contain"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  src="/yt.png"
                  className="w-[25px] sm:w-[30px] h-[25px] sm:h-[30px] object-contain"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  src="/fb.png"
                  className="w-[25px] sm:w-[30px] h-[25px] sm:h-[30px] object-contain"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center gap-[50px] sm:gap-10">
            <h5 className="text-black font-semibold max-w-[850px] text-[30px] sm:text-[45px] 2xl:text-[56px] relative 2xl:leading-[70px] ">
              <span className="text-[40px] sm:text-[50px] 2xl:text-[80px] text-orange leading-[1]">
                "
              </span>{" "}
              We believe that education has the power to transform lives.{" "}
              <span className="text-[40px] sm:text-[50px] 2xl:text-[80px] text-orange leading-[1]">
                "
              </span>
            </h5>
            <img
              src="/work.png"
              alt=""
              className="h-auto w-full max-w-[500px] sm:max-w-none sm:h-[400px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
