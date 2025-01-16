"use client";

import Image from "next/image";
import CusButton from "./CusButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Check out our new and best options on this very good website
        </h1>
        <p className="hero__subtitle">Hello, look at this good stuff here ;)</p>
        <CusButton
          title="See Car"
          containerStyle="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="hero"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1300px) 50vw, 100vw"
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
