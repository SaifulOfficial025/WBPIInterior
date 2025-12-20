import React from "react";
import TextToggle from "../../Shared/TextToggle";
import bg from "../../../public/teamdetailsbg.png";
import Divider from "../../Shared/Divider";

function Details() {
  return (
    <section
      className="h-[1200px] flex items-center justify-center bg-cover bg-center relative mt-20 overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full  ml-[50%] mt-[15%] p-12  mb-12 flex flex-col gap-12 h-[1200px] overflow-y-auto">
        <div>
          <h3 className="font-semibold text-2xl mb-2">OUR TEAM</h3>
          <p className="text-md text-black mb-2">
            Our team brings together design expertise, technical knowledge, and
            project delivery discipline to create spaces that perform, inspire,
            and endure.
          </p>
        </div>
        <div className="-my-6">
          <Divider />
        </div>
        <TextToggle
          heading="EXPLORE MORE"
          text="Dummy text for team experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur."
        />
        <div>
          <h3 className="font-semibold text-2xl mb-2">OUR PARTNERS</h3>
          <p className="text-md text-black mb-2">
            We collaborate with trusted partners who share our commitment to
            quality, transparency, and excellence in delivery. Our design and
            build partners have proven track records and are carefully selected
            to suit the specific needs of each project. We choose our partners
            based on their experience, expertise, and ability to deliver
            consistently high standards across every stage of execution.
          </p>
        </div>
        <div className="-my-6">
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
