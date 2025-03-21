import React from "react";

import NewItems from "./NewItems";
import RecentUpdate from "./RecentUpdate";
import ExpectedPremiere from "./ExpectedPremiere";
import Slider from "./Slider/Slider";


function Home() {
  return (
    <div className="bg-gray-900 h-auto sm:h-auto w-screen sm:screen">
      <div className="pt-20">
        {/* <Slider/> */}
        <NewItems />
      </div>
      <RecentUpdate />

      <ExpectedPremiere />
    </div>
  );
}

export default Home;
