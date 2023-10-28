import React from "react";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";
import { Link } from "react-router-dom";
const carouselImages = [img1, img2, img3, img4];

const Hero = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl ">
          We’re changing the way people Travel.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam
          odit, officiis eos mollitia alias, doloremque, aspernatur ratione
          asperiores voluptas labore minus dolores reprehenderit corporis quos.
          Assumenda molestias harum dignissimos?
        </p>
        {/* <div className='mt-10 '>
          <Link to='products' className='btn btn-primary '>
            Our Products
          </Link>
        </div> */}
      </div>
      <div className="hidden  h-[28rem] lg:carousel carousel-center   p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image, index) => {
          return (
            <div key={index} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80  object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
