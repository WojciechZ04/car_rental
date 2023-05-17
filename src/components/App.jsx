import React from "react";
import Navbar from "./Navbar.jsx"
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import SpecialOffers from "./SpecialOffers.jsx";
import Steps from "./Steps.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Steps />
      <SpecialOffers />
      <Footer />
    </div>
  );
}

export default App;
