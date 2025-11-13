import React from "react";
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";
import animationData from "../assets/cleaning-animation.json";

const HeroSection = () => {
  return (
    <div className="bg-gray-100 py-5">
      <div className="max-w-6xl mx-auto flex  md:flex-row items-center gap-10 px-4 ">
        {/* Text Section */}
        <div className=" text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-green-500">CleanUpHub </span>
            <Typewriter
              words={[
                "Solve Community Issues",
                "Contribute",
                "Make a Difference",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Join a community of proactive citizens helping to make cities
            cleaner, safer, and better every day. Log in or register to start
            contributing!
          </p>
          <div className="flex justify-center  gap-4">
            <a
              href="/login"
              className="btn
              btn-sm
              bg-green-600
              text-white
              mt-auto
              hover:bg-green-700
              hover:scale-105
              hover:shadow-md
              transition-all
              duration-300
              mt-6"
            >
              Login
            </a>
            <a
              href="/register"
              className="btn
              btn-sm
              bg-green-600
              text-white
              mt-auto
              hover:bg-green-700
              hover:scale-105
              hover:shadow-md
              transition-all
              duration-300
              mt-6"
            >
              Register
            </a>
          </div>
        </div>

        {/* Lottie Animation Section */}
        <div className="flex-1 w-full max-w-md">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
