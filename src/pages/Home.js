import React from "react";
import PlantList from "../components/PlantList";
import CopyRightinfo from "../components/CopyRightInfo";

const Home = () => {
  return (
    <div className="container">
      <PlantList />
      <CopyRightinfo />
    </div>
  );
};

export default Home;
