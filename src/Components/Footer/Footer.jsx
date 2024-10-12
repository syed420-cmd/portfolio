import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To Reach Out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a href="mailto:adilahmed01827@gmail.com" className="hover:underline">
            adilahmed01827@gmail.com
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          <a
            href="https://www.linkedin.com/in/syedadil411"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/syedadil411
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          <a
            href="https://github.com/syed420-cmd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/syed420-cmd
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <span>📄</span> {/* Optional: You can use an icon here */}
          <a
            href="https://drive.google.com/file/d/1JgJjqmC9WGHdUemzISlOUK2dmV6oAqVD/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            View CV
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
