import React from "react";
import Hero from "./Hero";
import LookFeel from "./LookFeel";
import CorporateIdentity from "./CorporateIdentity";
import MoodImages from "./MoodImages";
import Furniture from "./Furniture";

function RootPage() {
  return (
    <div>
      <Hero />
      <Furniture />
      <LookFeel />
      <CorporateIdentity />
      <MoodImages />
    </div>
  );
}

export default RootPage;
