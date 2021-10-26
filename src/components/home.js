import React from "react";
import MainContent from "./maincontent";
import Navigation from "./navigation";

const Home = () => {
  return (
    <div className="container relative">
      <Navigation />
      <MainContent />
    </div>
  );
};

export default Home;
