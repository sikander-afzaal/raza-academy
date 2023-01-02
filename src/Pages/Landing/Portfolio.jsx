const Portfolio = () => {
  return (
    <div className="wrapper bg-cover mt-[60px] xl:mt-[100px] bg-blackBg">
      <div className="flex xl:flex-row flex-col justify-between items-center py-[80px] xl:gap-0 gap-[70px] xl:py-[130px] w-full max-w-theme">
        <h5 className="text-white xl:text-left text-center font-semibold w-full text-[30px] sm:text-[45px] 2xl:text-[56px] relative 2xl:leading-[80px] ">
          <span className="text-[40px] sm:text-[50px] 2xl:text-[80px] text-lightOrange leading-[1]">
            "
          </span>{" "}
          Sir Raza Academy is a great place to study computer Science.
          <span className="text-[40px] sm:text-[50px] 2xl:text-[80px] text-lightOrange leading-[1]">
            "
          </span>
        </h5>
        <div className="flex justify-center w-full text-center items-center gap-[60px] flex-col">
          <div className="flex justify-center items-stretch gap-[50px] sm:gap-[70px]">
            <div className="flex justify-start items-center flex-col gap-3">
              <h4 className="text-lightOrange font-semibold text-[40px] sm:text-[60px] leading-[1]">
                100%
              </h4>
              <p className="text-white font-medium text-2xl sm:text-[30px]">
                Pass <br /> Outs
              </p>
            </div>
            <div className="bg-white w-[1px]"></div>
            <div className="flex justify-start items-center flex-col gap-3">
              <h4 className="text-lightOrange font-semibold text-[40px] sm:text-[60px] leading-[1]">
                82%
              </h4>
              <p className="text-white font-medium text-2xl sm:text-[30px]">
                A*,A & B <br /> Grades
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center flex-col gap-3">
            <h4 className="text-lightOrange font-semibold text-[40px] sm:text-[60px] leading-[1]">
              4.91/5.00
            </h4>
            <p className="text-white font-medium text-2xl sm:text-[30px]">
              GPA Year 2022 May June <br /> Computer Science Result
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
