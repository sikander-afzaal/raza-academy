const Campus = () => {
  return (
    <div className="wrapper mt-[70px] xl:mt-[120px] xl:bg-none bg-orangeGr">
      <div className="flex justify-center items-stretch w-full max-w-theme">
        <div className="w-full flex justify-center xl:items-start items-center text-center xl:text-left xl:min-w-[600px] px-2 sm:px-7 2xl:px-20 gap-4 sm:gap-2 py-10 xl:py-5 flex-col xl:bg-orangeGr ">
          <h3 className="text-white font-normal text-[22px] sm:text-[30px]">
            #Discover
          </h3>
          <h2 className="font-semibold text-white leading-[1.3] text-[30px] sm:text-[50px] 2xl:text-[64px]">
            A Campus Without Precendent
          </h2>
          <p className="text-white text-base sm:text-[20px]">
            is one that is not afraid to challenge the status quo and push the
            boundaries of what is possible
          </p>
          <button className="border-white bg-transparent text-white w-[150px] h-[50px] border-2 border-solid font-semibold cursor-pointer hover:bg-white hover:text-orange rounded-md mt-5 transition-all duration-300">
            Learn More
          </button>
        </div>
        <img
          src="/campus.png"
          className=" object-contain max-w-[700px] xl:block hidden"
          alt=""
        />
      </div>
    </div>
  );
};

export default Campus;
