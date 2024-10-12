import React from "react";

import AboutImg from "../../assets/adil.jpg";


import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                As a frontend developer, I am passionate about creating dynamic and responsive user interfaces that provide an engaging experience. With expertise in React, I focus on building intuitive and visually appealing applications, ensuring seamless performance across devices. My skills include leveraging modern CSS frameworks and tools to enhance usability, while keeping user-centered design principles at the forefront. I thrive on transforming complex ideas into simple, user-friendly designs that resonate with users.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

            

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                In the realm of backend development, I specialize in building robust and scalable applications using Node.js and Express. My experience with MongoDB allows me to create efficient databases that handle data seamlessly. I prioritize writing clean, maintainable code and implementing RESTful APIs to ensure smooth communication between the server and client. My commitment to security and performance enables me to deliver reliable solutions that meet the needs of diverse applications, all while continuously optimizing and refining my skills.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
