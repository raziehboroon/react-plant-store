import React from "react";
import Plant from "./Plant";
import { useGlobalContext } from "../Context";

const PlantList = () => {
  const { data } = useGlobalContext();

  return (
    <div className="row align-items-center justify-content-center pt-1 pb-3 mx-1">
      <h2 className="plant-title text-center mt-2">all Plants</h2>
      {data.map((item) => (
        <Plant key={item.id} {...item} />
      ))}
    </div>
  );
};

export default PlantList;
