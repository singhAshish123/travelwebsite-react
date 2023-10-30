import React from "react";
import HotelsContainer from "../components/HotelsContainer";
import { customFetch } from "../utils";

export const loader = async () => {
  const response = await customFetch("/hotels");
  const hotels = response.data;
  return { hotels };
};

const Hotels = () => {
  return (
    <>
      <HotelsContainer />
    </>
  );
};

export default Hotels;
