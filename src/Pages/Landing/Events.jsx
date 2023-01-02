const Events = () => {
  return (
    <div className="wrapper mt-[100px] bg-blackBg bg-cover">
      <div className="flex justify-start py-[80px] xl:py-[100px] items-center flex-col w-full max-w-theme">
        <div className="flex justify-start text-center mb-[40px] xl:mb-[70px] items-center flex-col gap-0 ">
          <h4 className="text-lightOrange font-medium text-[25px] xl:text-[30px]">
            #Events
          </h4>
          <h2 className="text-white font-bold text-[40px] sm:text-[50px] xl:text-[58px]">
            Upcoming <br /> Events
          </h2>
        </div>
        <div className="w-full flex justify-between xl:flex-row flex-col items-center xl:items-stretch gap-[50px] xl:gap-4">
          <div className="bg-[rgba(255,255,255,0.12)] pb-[30px] gap-4 min-h-[550px] w-full max-w-[460px] rounded-tl-[24px] rounded-tr-[24px] flex justify-start items-start flex-col overflow-hidden">
            <img
              src="/path1.png"
              className="w-full min-h-[252px] object-cover"
              alt=""
            />
            <h4 className="font-semibold text-lg sm:text-xl text-lightOrange px-5">
              25 Jun 13:00 - 15:00
            </h4>
            <h3 className="text-white font-medium text-2xl sm:text-[28px] px-5">
              Helping to change the worldbetter with Algorithms
            </h3>
            <button className="self-center border-2 mt-auto border-lightOrange border-solid w-[200px] h-[53px] hover:bg-lightOrange transition-all duration-500 bg-transparent text-white capitalize font-medium text-xl">
              Know More
            </button>
          </div>
          <div className="bg-[rgba(255,255,255,0.12)] pb-[30px] gap-4 min-h-[550px] w-full max-w-[460px] rounded-tl-[24px] rounded-tr-[24px] flex justify-start items-start flex-col overflow-hidden">
            <img
              src="/path1.png"
              className="w-full min-h-[252px] object-cover"
              alt=""
            />
            <h4 className="font-semibold text-lg sm:text-xl text-lightOrange px-5">
              25 Jun 13:00 - 15:00
            </h4>
            <h3 className="text-white font-medium text-2xl sm:text-[28px] px-5">
              Helping to change the worldbetter with Algorithms
            </h3>
            <button className="self-center border-2 mt-auto border-lightOrange border-solid w-[200px] h-[53px] hover:bg-lightOrange transition-all duration-500 bg-transparent text-white capitalize font-medium text-xl">
              Know More
            </button>
          </div>
          <div className="bg-[rgba(255,255,255,0.12)] pb-[30px] gap-4 min-h-[550px] w-full max-w-[460px] rounded-tl-[24px] rounded-tr-[24px] flex justify-start items-start flex-col overflow-hidden">
            <img
              src="/path1.png"
              className="w-full min-h-[252px] object-cover"
              alt=""
            />
            <h4 className="font-semibold text-lg sm:text-xl text-lightOrange px-5">
              25 Jun 13:00 - 15:00
            </h4>
            <h3 className="text-white font-medium text-2xl sm:text-[28px] px-5">
              Helping to change the worldbetter with Algorithms
            </h3>
            <button className="self-center border-2 mt-auto border-lightOrange border-solid w-[200px] h-[53px] hover:bg-lightOrange transition-all duration-500 bg-transparent text-white capitalize font-medium text-xl">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
