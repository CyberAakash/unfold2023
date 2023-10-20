import React from "react";
import Marquee from "react-fast-marquee";
import "./Hero.css";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="container h-fit min-h-[130vh] mt-10 sm:mt-0 lg:min-h-screen mx-auto px-6 sm:px-10 lg:px-20 py-10 relative z-30 grid md:grid-cols-12 justify-between w-full bg-bg1 text-white overflow-hidden">
        <div className="absolute bg-[url(/gridsm.jpg)] opacity-20 bg-repeat bg-blend-lighten bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] inset-0 w-full"></div>
        <div className="w-full mb-6 md:mb-32 col-span-12 md:col-span-9 lg:col-span-6 xl:col-span-5">
          <a
            className="mb-9 hidden md:inline-block rounded-full border border-[#CAD4D7] px-7 py-[0.65rem] hover:border-[#A8B1B4]"
            type="button"
            href="#/modal/video"
          >
            <span className="mr-2 inline-block border-y-[6px] border-l-[6px] border-r-0 border-solid border-y-transparent border-l-black"></span>
            Watch our's story
          </a>
          <div className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl richtext">
            <i>
              The <span className="text-primary block">Crime</span>
              <h1>Reporting Portal</h1>
            </i>
          </div>
          <div className="min-h-xl min-w-full inline-block"></div>
          <p className="text-lg lg:text-[1.375rem] font-normal md:leading-[2.125rem] richtext">
            Quis aute laboris adipisicing nulla.
          </p>
          {/* <div className="min-h-xl min-w-full inline-block"></div> */}
          {/* <div className=""></div> */}
          <div className="min-h-md min-w-full inline-block"></div>
          <p className="text-xs richtext">
            Qui ea Lorem tempor aliquip do. Velit laboris nostrud eu laborum
            occaecat amet ullamco nulla adipisicing et. Qui aute ut commodo
            magna ad irure adipisicing.
          </p>
          <div className="min-h-xl min-w-full inline-block"></div>
          <Link
            // href="/report_submit"
            href="/store_data_in_wallet"
            alt=""
            className="p-4 relative z-50 flex items-center justify-center text-center min-w-[70%] bg-primary text-bg2 rounded-tl-lg rounded-br-lg cursor-pointer"
          >
            Submit a incident
          </Link>

          {/* <form className="border-2 border-black rounded-3xl p-4 flex items-center justify-center relative">
            <input
              type="email"
              name="email"
              className="w-full h-full"
              placeholder="Email Address"
            />
            <input
              type="button"
              className="p-3 absolute right-0 top-1/2 -translate-y-1/2 h-fit w-fit bg-black rounded-3xl text-white text-sm font-semibold sm:text-lg"
              value="Contact Us"
            />
          </form> */}
        </div>

        {/* Slider */}
        <div className="hidden md:block lg:hidden md:col-span-3 md:col-start-10 pb-6 motion-reduce:-translate-y-8 duration-1000 ease-in-out transition-all will-change-transform motion-reduce:opacity-100">
          <div className="grid grid-cols-6 p-0 place-items-center w-full justify-between relative px-5 ml-5 self-end opacity-0 mask-image-[linear-gradient(0deg,transparent,rgba(255,255,255,1)_20%,rgba(0,0,0,1)_75%,transparent)] origin-top min-h-[calc(100%+72px)] animate-homepage-image-tracks">
            <Marquee
              className="w-fit h-fit grid place-content-evenly place-items-center col-span-6"
              direction="up"
              speed={60}
              //   pauseOnHover="false"
              loop={0}
              gradient="true"
              gradientColor="#363062"
            >
              <div className="p-0 m-0 flex items-center justify-center bg-black rounded-xl h-[200px] min-w-[170px]"></div>
              <div className="p-0 m-0 flex items-center justify-center bg-primary rounded-xl h-[80px] w-[170px]"></div>
              <div className="p-0 m-0 flex items-center justify-center bg-sea1 rounded-xl h-[200px] w-[170px]"></div>
              <div className="p-0 m-0 flex items-center justify-center bg-primary rounded-xl h-[100px] w-[170px]"></div>
              <div className="p-0 m-0 flex items-center justify-center bg-black rounded-xl h-[200px] w-[170px]"></div>
              <div className="p-0 m-0 flex items-center justify-center bg-primary rounded-xl h-[80px] w-[170px]"></div>
              <div className="p-0 m-0 flex items-center justify-center bg-sea2 rounded-xl h-[200px] w-[170px]"></div>
              <div className="p-0 m-0 flex items-center justify-center bg-primary rounded-xl h-[100px] w-[170px]"></div>
              <div className="p-0 m-0 flex items-center justify-center bg-black rounded-xl h-[200px] w-[170px]"></div>
              <div className="p-0 m-0 flex items-center justify-center bg-primary rounded-xl h-[80px] w-[170px]"></div>
            </Marquee>
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-6 lg:col-start-7 xl:col-span-5 xl:col-start-8 pb-6 motion-reduce:translate-y-0 duration-1000 ease-in-out transition-all will-change-transform motion-reduce:opacity-100">
          <div className="grid grid-cols-6 place-items-center w-full justify-between relative px-5 ml-5 self-end opacity-0 mask-image-[linear-gradient(0deg,transparent,rgba(255,255,255,1)_20%,rgba(0,0,0,1)_75%,transparent)] origin-top min-h-[calc(100%+72px)] animate-homepage-image-tracks">
            <Marquee
              className="w-fit h-fit grid place-content-evenly place-items-center col-span-3"
              direction="up"
              speed={60}
              //   pauseOnHover="false"
              loop={0}
              gradient="true"
              gradientColor="#363062"
            >
              <div className="p-0 m-0 flex items-center justify-center bg-black rounded-xl h-[200px] min-w-[170px]"></div>
              <div className="p-0 m-0 flex items-center justify-center bg-primary rounded-xl h-[80px] w-[170px]"></div>
              <div className="p-0 m-0 flex items-center justify-center bg-black rounded-xl h-[200px] w-[170px]"></div>
              <div className="p-0 m-0 flex items-center justify-center bg-aurora3 rounded-xl h-[100px] w-[170px]"></div>
              <div className="p-0 m-0 flex items-center justify-center bg-black rounded-xl h-[200px] w-[170px]"></div>
              <div className="p-0 m-0 flex items-center justify-center bg-primary rounded-xl h-[80px] w-[170px]"></div>
              <div className="p-0 m-0 flex items-center justify-center bg-black rounded-xl h-[200px] w-[170px]"></div>
              <div className="p-0 m-0 flex items-center justify-center bg-aurora3 rounded-xl h-[100px] w-[170px]"></div>
              <div className="p-0 m-0 flex items-center justify-center bg-black rounded-xl h-[200px] w-[170px]"></div>
              <div className="p-0 m-0 flex items-center justify-center bg-primary rounded-xl h-[80px] w-[170px]"></div>
            </Marquee>
            <Marquee
              className="w-fit h-fit grid place-content-evenly place-items-center col-span-3"
              direction="up"
              speed={45}
              //   pauseOnHover="false"
              loop={0}
              gradient="true"
              gradientColor="#363062"
            >
              <div className="p-0 m-0 flex items-center justify-center bg-black rounded-xl h-[200px] min-w-[170px]"></div>
              <div className="p-0 m-0 flex items-center justify-center bg-sea1 rounded-xl h-[80px] w-[170px]"></div>
              <div className="p-0 m-0 flex items-center justify-center bg-black rounded-xl h-[200px] w-[170px]"></div>
              <div className="p-0 m-0 flex items-center justify-center bg-primary rounded-xl h-[100px] w-[170px]"></div>
              <div className="p-0 m-0 flex items-center justify-center bg-black rounded-xl h-[200px] w-[170px]"></div>
              <div className="p-0 m-0 flex items-center justify-center bg-sea2 rounded-xl h-[80px] w-[170px]"></div>
              <div className="p-0 m-0 flex items-center justify-center bg-black rounded-xl h-[200px] w-[170px]"></div>
              <div className="p-0 m-0 flex items-center justify-center bg-primary rounded-xl h-[100px] w-[170px]"></div>
              <div className="p-0 m-0 flex items-center justify-center bg-black rounded-xl h-[200px] w-[170px]"></div>
              <div className="p-0 m-0 flex items-center justify-center bg-primary rounded-xl h-[80px] w-[170px]"></div>
            </Marquee>
          </div>
        </div>
        {/* <div className="absolute z-13 bottom-0 left-0 h-[100px] sm:h-[170px] lg:h-[200px] w-screen overflow-hidden bg-gradient-to-t from-white via-white to-transparent"></div> */}
      </div>
    </>
  );
};

export default Hero;
