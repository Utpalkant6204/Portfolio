import React from "react";
import { MdSubdirectoryArrowRight } from "react-icons/md";

const Experience = () => {
  return (
    <div className="mx-24 max-[600px]:mx-4 max-[1000px]:mx-8">
      <h2
        style={{
          fontFamily: "GT Pressura Mono, monospace",
          textTransform: "uppercase",
          letterSpacing: "3px",
          fontSize: "16px",
          color: "#F1F1F1",
          fontWeight: "bold",
        }}
        className="pt-10 pb-8 px-10 max-[600px]:px-5"
      >
        Experience
      </h2>
      <div className="px-10 mx-[750]:px-5 mb-10">
        <div className="flex justify-between ">
          <h3
            style={{
              fontFamily: "GT Pressura",
              color: "#06ED86",
              fontSize: "24px",
              fontWeight: "400",
            }}
          >
            <span className="me-5">🏢</span>
            <a href="https://www.beehyv.com/" target="_blank">
              BeeHyv Software Solutions Private Limited
            </a>
          </h3>
          <h3
            style={{
              fontFamily: "GT Pressura",
              color: "#06ED86",
              fontSize: "24px",
              fontWeight: "400",
            }}
          >
            Jan 2024 - now
          </h3>
        </div>
        <p
          style={{
            fontFamily: "GT Pressura",
            color: "#F1F1F1",
            fontSize: "20px",
          }}
          className="mx-10 px-3"
        >
          Software Developer Trainee
        </p>
        <div className="flex mx-28 my-2">
          <MdSubdirectoryArrowRight color="#F1F1F1" size={"24px"} />
          <p style={{ fontSize: "20px", color: "#F1F1F1" }} className="mx-3">
            Traineeship on Fullstack Java Development
          </p>
        </div>
      </div>

      <div className="px-10 mx-[750]:px-5">
        <div className="flex justify-between">
          <h3
            style={{
              fontFamily: "GT Pressura",
              color: "#06ED86",
              fontSize: "24px",
              fontWeight: "400",
            }}
          >
            <span className="me-5">🏢</span>
            IndiaBhumi
          </h3>
          <h3
            style={{
              fontFamily: "GT Pressura",
              color: "#06ED86",
              fontSize: "24px",
              fontWeight: "400",
            }}
          >
            Nov 2023 - Dec 2024
          </h3>
        </div>
        <p
          style={{
            fontFamily: "GT Pressura",
            color: "#F1F1F1",
            fontSize: "20px",
          }}
          className="mx-10 px-3"
        >
          Front-end Developer
        </p>
        <div className="flex mx-28 my-2">
          <MdSubdirectoryArrowRight color="#F1F1F1" size={"24px"} />
          <p style={{ fontSize: "20px", color: "#F1F1F1" }}>
            Worked on projects involving dynamic routing & responsiveness in
            single-page applications.
          </p>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "28px",
          lineHeight: "0",
          color: "white",
        }}
        className="my-12"
      >
        <span>&#183; &#183; &#183;</span>
      </div>
    </div>
  );
};

export default Experience;
