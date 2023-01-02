const Pathway = () => {
  return (
    <div className="wrapper mt-[60px] xl:mt-[100px]">
      <div className="flex justify-center items-center flex-col w-full max-w-theme">
        <div className="flex justify-start text-center items-center flex-col gap-0 ">
          <h4 className="text-lightOrange font-medium text-[25px] xl:text-[40px]">
            #Find Your Pathway
          </h4>
          <h2 className="text-[#313635] font-bold text-[40px] sm:text-[50px] xl:text-[64px]">
            Your Education <br /> Pathway
          </h2>
        </div>
        <div className="flex xl:flex-row flex-col mt-[40px] xl:mt-[80px] justify-between items-center w-full gap-[50px] sm:gap-[60px] xl:gap-5">
          <div className="flex w-full max-w-[465px] text-center justify-start items-center flex-col">
            <img
              src="/path1.png"
              className="w-full object-contain rounded-lg"
              alt=""
            />
            <h6 className="text-lightOrange font-bold mt-5 sm:mt-7 mb-2 text-[25px] sm:text-[30px]">
              Advanced Level
            </h6>
            <p className="text-black font-medium text-base sm:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
          <div className="flex w-full max-w-[465px] text-center justify-start items-center flex-col">
            <img
              src="/path1.png"
              className="w-full object-contain rounded-lg"
              alt=""
            />
            <h6 className="text-lightOrange font-bold mt-5 sm:mt-7 mb-2 text-[25px] sm:text-[30px]">
              Training
            </h6>
            <p className="text-black font-medium text-base sm:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
          <div className="flex w-full max-w-[465px] text-center justify-start items-center flex-col">
            <img
              src="/path1.png"
              className="w-full object-contain rounded-lg"
              alt=""
            />
            <h6 className="text-lightOrange font-bold mt-5 sm:mt-7 mb-2 text-[25px] sm:text-[30px]">
              University Admissions
            </h6>
            <p className="text-black font-medium text-base sm:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pathway;
