import React from "react";
import Header from "../../Shared/Header";
import Hero from "./Hero";
import Options from "./Options";
import FitoutWorks from "./FitoutWorks";
import TraditionalFitout from "./TraditionalFitout";
import OurDelivery from "./OurDelivery";
import DigitalReporting from "./DigitalReporting";
import ProvenRecord from "./ProvenRecord";
import ContractType from "./ContractType";
import Matterport from "./Matterport";
import Enlaps from "./Enlaps";
import Cad3d from "./Cad3d";
import OurPartner from "./OurPartner";
import PMC from "./PMC";
import DnBEfficiency from "./DnBEfficiency";
import CostConsultant from "./CostConsultant";
import AllAdvantage from "./AllAdvantage";

function RootPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Options />
      <FitoutWorks />
      <TraditionalFitout />
      <OurDelivery />
      <DigitalReporting />
      <ProvenRecord />
      <ContractType />
      <Matterport />
      <Enlaps />
      <Cad3d />
      <OurPartner />
      <PMC />
      <DnBEfficiency />
      <CostConsultant />
      <AllAdvantage />
    </div>
  );
}

export default RootPage;
