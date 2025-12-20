import React from "react";
import Hero from "./Hero";
import Details from "./Details";
import Header from "../../Shared/Header";

function RootPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Details />
    </div>
  );
}

export default RootPage;
