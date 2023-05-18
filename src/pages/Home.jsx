import React from "react";
import Header from "../components/Header.jsx";
import SpecialOffers from "../components/SpecialOffers.jsx";
import Steps from "../components/Steps.jsx"

function Home() {
  return (
    <div>
      <Header />
      <Steps />      
      <SpecialOffers />
    </div>
  );
}

export default Home;
