import React from "react";

import profileImg from"../../assets/profile.png"
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
        I am  Syed Adil Ahmed, a passionate web developer specializing in the MERN stack. I create dynamic applications with a strong focus on user experience and performance, including my portfolio site. My attention to detail and commitment to clean, maintainable code allow me to tackle challenges efficiently. I thrive in collaborative environments and am dedicated to delivering innovative solutions. Hire me to bring a dedicated developer to your team who is eager to contribute to your success.
        </p>
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>
      <div>
        <img className="" src={profileImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
