import React from "react";
import FullImageSlidePhotoFrame from "../Pages/Projects/Shared/FullImageSlidePhotoFrame";
import propertyimg from "../../public/PropertyFinder.png";

function Test() {
  return (
    <div>
      <FullImageSlidePhotoFrame
        imgUrl={propertyimg}
        title="PROPERTY FINDER"
        location="MEDIA CITY, DUBAI, UAE"
        year="2025"
        area="2,658"
        category="RESIDENTIAL"
      />
    </div>
  );
}

export default Test;
