import React from "react";
import MainContent from "./maincontent";
import Navigation from "./navigation";
import SadhnaComponent from "./sadhna";

const Home = () => {
  return (
    <div className="container relative">
      <Navigation />
      <MainContent />
      <SadhnaComponent />
    </div>
  );
};

export default Home;
