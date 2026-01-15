import React from "react";
import Header from "../../Shared/Header";
import Footer from "../../Shared/Footer";
import homebg from "../../../public/homebg.svg";
import Section1 from "./Section1";
import WeBuild from "./WeBuild";
import DesignWithHuman from "./DesignWithHuman";
import Whatever from "./Whatever";
import ChooseRealEstate from "./ChooseRealEstate";

const Home = () => {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-x-0 top-0 w-full z-30">
        <Header />
      </div>

      <main
        className="min-h-screen bg-center bg-cover"
        style={{ backgroundImage: `url(${homebg})` }}
      >
        <div className="max-w-7xl mx-auto h-screen px-6 flex items-center">
          <div className="ml-auto w-full md:w-1/2 lg:w-1/3 text-right -mt-20 ">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-gray-800 font-light leading-tight">
              <span>We don’t just build spaces</span>
              <br />
              <span className="font-normal">we build partnerships.</span>
            </h1>
          </div>
        </div>

        {/* <div className="absolute right-20 bottom-16 flex gap-6">
          <div className="w-36 h-36 bg-black bg-opacity-55 border border-gray-300/10"></div>
          <div className="w-36 h-36 bg-black bg-opacity-55 border border-gray-300/10"></div>
        </div> */}
      </main>
      <div className="overflow-hidden">
        <Section1 />
        <WeBuild />
        <DesignWithHuman />
        <Whatever />
        <ChooseRealEstate />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
