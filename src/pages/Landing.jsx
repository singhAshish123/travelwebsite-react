import React from "react";
import Hero from "../components/Hero";
import { customFetch } from "../utils";
import FeaturedHotel from "../components/FeaturedHotel";
const url = "/hotel";
export const loader = async () => {
  const response = await customFetch(url);
  const hotels = response.data;

  return { hotels };
};

const Landing = () => {
  return (
    <div>
      <Hero />
      <FeaturedHotel />
    </div>
  );
};

export default Landing;
