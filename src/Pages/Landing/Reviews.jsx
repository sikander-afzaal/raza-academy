import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Reviews = () => {
  return (
    <div className="wrapper mt-[90px] md:mt-[150px] overflow-hidden">
      <div className="flex justify-start items-center flex-col w-full max-w-theme gap-4">
        <h2 className="text-black text-center mb-[100px] text-[40px] sm:text-[60px] font-medium">
          What Our <br /> <span className="text-lightOrange">Student's</span>{" "}
          Say
        </h2>
        <Splide
          options={{
            width: "100%",
            arrows: false,
            pagination: false,
            drag: "free",
            autoWidth: true,
            type: "loop",
            fixedHeight: "800px",
            focus: "center",
            gap: "4rem",
            autoplay: true,
            breakpoints: {
              640: {
                fixedHeight: false,
                drag: true,
                perMove: 1,
                perPage: 1,
              },
            },
          }}
        >
          <SplideSlide>
            <div className="flex self-start text-center min-h-[300px] w-full sm:w-[500px] h-auto p-6 justify-start items-center flex-col relative bg-white shadow-about">
              <img
                src="/quote-right.png"
                className="absolute w-[40px] sm:w-[50px] object-contain left-full -translate-x-1/2 -translate-y-1/2 top-1/2"
                alt=""
              />
              <img
                src="/quote-left.png"
                className="absolute w-[40px] sm:w-[50px] object-contain right-full translate-x-1/2 -translate-y-1/2 top-1/2"
                alt=""
              />
              <img
                className="object-contain -mt-6 -mb-6 -translate-y-1/2 rounded-full w-[100px]"
                src="/profile.png"
                alt=""
              />
              <h2 className="text-lightOrange uppercase font-bold text-3xl sm:text-[35px]">
                AYAN
              </h2>
              <p className="text-black font-medium text-base sm:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex self-end text-center min-h-[300px] w-full sm:w-[500px] h-auto p-6 justify-start items-center flex-col relative bg-white shadow-about">
              <img
                src="/quote-right.png"
                className="absolute w-[40px] sm:w-[50px] object-contain left-full -translate-x-1/2 -translate-y-1/2 top-1/2"
                alt=""
              />
              <img
                src="/quote-left.png"
                className="absolute w-[40px] sm:w-[50px] object-contain right-full translate-x-1/2 -translate-y-1/2 top-1/2"
                alt=""
              />
              <img
                className="object-contain -mt-6 -mb-6 -translate-y-1/2 rounded-full w-[100px]"
                src="/profile.png"
                alt=""
              />
              <h2 className="text-lightOrange uppercase font-bold text-3xl sm:text-[35px]">
                AYAN
              </h2>
              <p className="text-black font-medium text-base sm:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex self-start text-center min-h-[300px] w-full sm:w-[500px] h-auto p-6 justify-start items-center flex-col relative bg-white shadow-about">
              <img
                src="/quote-right.png"
                className="absolute w-[40px] sm:w-[50px] object-contain left-full -translate-x-1/2 -translate-y-1/2 top-1/2"
                alt=""
              />
              <img
                src="/quote-left.png"
                className="absolute w-[40px] sm:w-[50px] object-contain right-full translate-x-1/2 -translate-y-1/2 top-1/2"
                alt=""
              />
              <img
                className="object-contain -mt-6 -mb-6 -translate-y-1/2 rounded-full w-[100px]"
                src="/profile.png"
                alt=""
              />
              <h2 className="text-lightOrange uppercase font-bold text-3xl sm:text-[35px]">
                AYAN
              </h2>
              <p className="text-black font-medium text-base sm:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex self-end text-center min-h-[300px] w-full sm:w-[500px] h-auto p-6 justify-start items-center flex-col relative bg-white shadow-about">
              <img
                src="/quote-right.png"
                className="absolute w-[40px] sm:w-[50px] object-contain left-full -translate-x-1/2 -translate-y-1/2 top-1/2"
                alt=""
              />
              <img
                src="/quote-left.png"
                className="absolute w-[40px] sm:w-[50px] object-contain right-full translate-x-1/2 -translate-y-1/2 top-1/2"
                alt=""
              />
              <img
                className="object-contain -mt-6 -mb-6 -translate-y-1/2 rounded-full w-[100px]"
                src="/profile.png"
                alt=""
              />
              <h2 className="text-lightOrange uppercase font-bold text-3xl sm:text-[35px]">
                AYAN
              </h2>
              <p className="text-black font-medium text-base sm:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex self-start text-center min-h-[300px] w-full sm:w-[500px] h-auto p-6 justify-start items-center flex-col relative bg-white shadow-about">
              <img
                src="/quote-right.png"
                className="absolute w-[40px] sm:w-[50px] object-contain left-full -translate-x-1/2 -translate-y-1/2 top-1/2"
                alt=""
              />
              <img
                src="/quote-left.png"
                className="absolute w-[40px] sm:w-[50px] object-contain right-full translate-x-1/2 -translate-y-1/2 top-1/2"
                alt=""
              />
              <img
                className="object-contain -mt-6 -mb-6 -translate-y-1/2 rounded-full w-[100px]"
                src="/profile.png"
                alt=""
              />
              <h2 className="text-lightOrange uppercase font-bold text-3xl sm:text-[35px]">
                AYAN
              </h2>
              <p className="text-black font-medium text-base sm:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex self-end text-center min-h-[300px] w-full sm:w-[500px] h-auto p-6 justify-start items-center flex-col relative bg-white shadow-about">
              <img
                src="/quote-right.png"
                className="absolute w-[40px] sm:w-[50px] object-contain left-full -translate-x-1/2 -translate-y-1/2 top-1/2"
                alt=""
              />
              <img
                src="/quote-left.png"
                className="absolute w-[40px] sm:w-[50px] object-contain right-full translate-x-1/2 -translate-y-1/2 top-1/2"
                alt=""
              />
              <img
                className="object-contain -mt-6 -mb-6 -translate-y-1/2 rounded-full w-[100px]"
                src="/profile.png"
                alt=""
              />
              <h2 className="text-lightOrange uppercase font-bold text-3xl sm:text-[35px]">
                AYAN
              </h2>
              <p className="text-black font-medium text-base sm:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Reviews;
