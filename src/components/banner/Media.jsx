import React from "react";
import { FaLinkedinIn, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiGithub,
  SiGmail,
  SiNextdotjs,
} from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              href="https://github.com/kumar-rahul2001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="mailto:rahulkumar20010702@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGmail />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/kumar-rahul2001/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST WEB STACK
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <SiMongodb />
          </span>
          <span className="bannerIcon">
            <SiExpress />
          </span>
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <FaNodeJs />
          </span>
          <span className="bannerIcon">
            <SiNextdotjs />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
