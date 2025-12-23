import React, { useRef } from "react";
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
  const fitoutRef = useRef(null);
  const matterportRef = useRef(null);
  const enlapsRef = useRef(null);
  const partnerRef = useRef(null);
  const pmcRef = useRef(null);

  return (
    <div>
      <Header />
      <Hero />
      <Options
        fitoutRef={fitoutRef}
        matterportRef={matterportRef}
        enlapsRef={enlapsRef}
        partnerRef={partnerRef}
        pmcRef={pmcRef}
      />
      <div ref={fitoutRef}>
        <FitoutWorks />
      </div>
      <TraditionalFitout />
      <OurDelivery />
      <DigitalReporting />
      <ProvenRecord />
      <ContractType />
      <div ref={matterportRef}>
        <Matterport />
      </div>
      <div ref={enlapsRef}>
        <Enlaps />
      </div>
      <Cad3d />
      <div ref={partnerRef}>
        <OurPartner />
      </div>
      <div ref={pmcRef}>
        <PMC />
      </div>
      <DnBEfficiency />
      <CostConsultant />
      <AllAdvantage />
    </div>
  );
}

export default RootPage;
