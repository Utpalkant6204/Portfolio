import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import "./home.css";
import { Link } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

function Home() {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={false}
        innerStyle={{
          backgroundColor: "red",
        }}
        outerStyle={{
          border: "3px solid #2596be",
        }}
      />
      <Header />
      <div className={`header-body ${isVisible ? "show" : ""}`}>
        <div className="w-1/4 h-auto right-10 top-29 fixed right-0 transition-all duration-500 ease">
          <img
            src="https://i.postimg.cc/Y9X8wkhJ/future-of-work-concept-illustration.jpg"
            className="w-full h-auto rounded-full"
            alt="Future of Work"
          />
        </div>
        <h1 className={`header-name text-gray-200`}>Hey, I'm Utpal Kant 👋</h1>
        <div className="text-gray-100">
          <p className="text-2xl italic p-1">
            I am final year College Student and also a Software Developer.
          </p>
        </div>
        <div className="flex align-center">
          <div className="flex align-center m-2 p-1 text-yellow-400 italic">
            ◌ Student
          </div>
          <div className="flex align-center m-2 p-1 text-yellow-400 italic">
            ◌ Software Developer
          </div>
        </div>
        <div className="flex justify-start align-center mb-3 icons">
          <div className="mx-5">
            <a
              href="https://drive.google.com/file/d/1MY5vV1Pm50Ro_kbxAhZW4tSMnceF2haR/view?usp=sharing"
              class="btn-flip"
              data-back="click"
              data-front="Resume"
              target="_blank"
            ></a>
          </div>
          <div className="border-r"></div>
          <div className="flex align-middle">
            <a
              href="https://github.com/Utpalkant6204"
              target="_blank"
              className="hover:scale-125"
            >
              <svg
                stroke="currentColor"
                fill="#CCCBCB"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1.8em"
                width="1.8em"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-5 cursor-pointer"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/utpal-kant-37ba2b212/"
              target="_blank"
              className="hover:scale-125"
            >
              <svg
                stroke="currentColor"
                fill="#CCCBCB"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1.8em"
                width="1.8em"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-5 cursor-pointer"
              >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
              </svg>
            </a>
            <a
              href="https://leetcode.com/utpal10/"
              target=" _blank"
              className="hover:scale-125"
            >
              <svg
                fill="#CCCBCB"
                width="1.8rem"
                height="1.8rem"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-5 cursor-pointer"
              >
                <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
              </svg>
            </a>
          </div>
        </div>
        <div className=" border border-red-500 mt-5 mb-5"></div>
        <div className="flex items-center cursor-pointer m-2 text-indigo-100">
          <Link to="/about" className="flex items-center hover:underline">
            <p className="mr-3">See More About Me</p>
            <div
              className="animate-bounce-left-right-smooth"
              onClick={() => setVisible(!isVisible)} // Toggle visibility on click
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="currentColor"
              >
                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
