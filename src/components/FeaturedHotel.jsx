import React from "react";
import SectionTitle from "./SectionTitle";
import HotelsGrid from "./HotelsGrid";

const FeaturedHotel = () => {
  return (
    <div className="pt-24">
      <SectionTitle text="Featured hotel" />
      <HotelsGrid />
    </div>
  );
};

export default FeaturedHotel;
