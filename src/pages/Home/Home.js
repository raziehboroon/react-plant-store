import React from "react";
import "./Home.scss";
import PlantList from "../../components/PlantList/PlantList";
import CopyRightInfo from "../../components/CopyRightInfo/CopyRightInfo";

const Home = () => {
  return (
    <main className="container">
      <PlantList />
      <CopyRightInfo />
    </main>
  );
};

export default Home;
