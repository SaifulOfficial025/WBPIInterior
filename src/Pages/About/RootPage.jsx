import React from "react";
import Header from "../../Shared/Header";
import Hero from "./Hero";
import MoreInfo from "./MoreInfo";
import Mission from "./Mission";

function RootPage() {
  return (
    <div>
      <Header />
      <Hero />
      <MoreInfo />
      <Mission />
    </div>
  );
}

export default RootPage;
