import React from "react";
import TextToggle from "../../Shared/TextToggle";
import bg from "../../../public/teamdetailsbg.png";
import Divider from "../../Shared/Divider";

function Details() {
  return (
    <section
      className="min-h-[600px] sm:min-h-[800px] md:h-[1200px] flex items-center justify-center bg-cover bg-center relative mt-8 sm:mt-20 overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full sm:w-auto ml-0 sm:ml-[20%] md:ml-[50%] mt-[5%] sm:mt-[10%] md:mt-[15%] p-4 sm:p-8 md:p-12 mb-4 sm:mb-8 md:mb-12 flex flex-col gap-6 sm:gap-8 md:gap-12 max-h-[80vh] sm:max-h-[85vh] md:h-[1200px] overflow-y-auto">
        <div>
          <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">
            OUR TEAM
          </h3>
          <p className="text-sm sm:text-md text-black mb-2">
            Our team brings together design expertise, technical knowledge, and
            project delivery discipline to create spaces that perform, inspire,
            and endure.
          </p>
        </div>
        <div className="-my-4 sm:-my-6">
          <Divider />
        </div>
        <TextToggle
          heading="EXPLORE MORE"
          text="Dummy text for team experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur."
        />
        <div>
          <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">
            OUR PARTNERS
          </h3>
          <p className="text-sm sm:text-md text-black mb-2">
            We collaborate with trusted partners who share our commitment to
            quality, transparency, and excellence in delivery. Our design and
            build partners have proven track records and are carefully selected
            to suit the specific needs of each project. We choose our partners
            based on their experience, expertise, and ability to deliver
            consistently high standards across every stage of execution.
          </p>
        </div>
        <div className="-my-4 sm:-my-6">
          <Divider />
        </div>
        <TextToggle
          heading="EXPLORE MORE"
          text="Dummy text for partners. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur."
        />
      </div>
    </section>
  );
}

export default Details;
