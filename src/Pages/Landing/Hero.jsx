const Hero = () => {
  return (
    <div className="flex justify-start w-full flex-col relative items-center h-auto xl:h-screen isolate  md:px-8 px-5 pt-[140px] sm:pt-[130px] xl:pt-0 min-h-[900px]  bg-blackBg bg-center bg-cover">
      <img
        src="/hero-circles.png"
        className="absolute right-0 bottom-0 -z-10 2xl:max-w-full max-w-[400px] sm:max-w-[500px] md:max-w-[700px]"
        alt=""
      />
      <div className="flex justify-between items-center xl:flex-row flex-col h-full w-full max-w-theme">
        <div className="flex justify-start items-center text-center md:text-left md:items-start flex-col gap-[30px] w-full relative">
          <img
            src="/chalk.png"
            alt=""
            className="absolute md:block hidden right-[10%] lg:right-[30%]  xl:right-[18%] -z-10 top-[10%] max-w-[120px] 2xl:max-w-[200px]"
          />
          <img
            src="/arrow.png"
            alt=""
            className="absolute md:block hidden right-[30%] lg:right-[45%]  xl:right-[32%] 2xl:right-[35%] -z-10 top-[70%] 2xl:top-[60%] max-w-[90px] 2xl:max-w-[200px]"
          />
          <h2 className="text-white font-bold text-[30px] sm:text-[40px] md:text-[70px] md:max-w-[600px]">
            Discover your own world of oppurtunity
          </h2>
          <p className="text-white font-medium text-[18px] md:text-[24px] md:max-w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
          <button className="cta-btn w-[200px] md:w-[250px]">
            View All Courses
          </button>
        </div>
        <img
          src="/person.png"
          className="w-full max-w-[450px] md:static absolute bottom-0 right-0 md:max-w-[600px] self-end object-contain"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
