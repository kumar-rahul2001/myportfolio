import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "Designer.",
      "MERN Stack & Django Developer.",
      // "Wildlife Enthusiast Capturing Wonders Through My Lens 📸",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        {/* <h4 className=" text-lg font-normal">Hola Amingos 👀🙋‍♂️ </h4> */}
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Rahul Kumar</span>
        </h1>
        <div style={{ overflow: "hidden", height: "130px" }}>
          <h2 className="text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>
        </div>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          "I am a passionate MERN stack and Django developer. With a strong
          foundation in web development and a keen eye for data, I create
          innovative solutions that bridge technology and user experience."
        </p>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;
