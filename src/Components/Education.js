import React from "react";

const Education = () => {
  return (
    <div className="my-14 mx-24 max-[600px]:mx-0 max-[1000px]:mx-8">
      <h2
        style={{
          fontFamily: "GT Pressura Mono, monospace",
          textTransform: "uppercase",
          letterSpacing: "3px",
          color: "#F1F1F1",
          fontWeight: "bold",
        }}
        className="pt-10 pb-8 px-10 max-[600px]:px-5 text-[16px]"
      >
        Education
      </h2>
      <div className="px-10 max-[600]:px-0">
        <div className="flex justify-between">
          <h3
            style={{
              fontFamily: "GT Pressura",
              color: "#06ED86",
              fontWeight: "400",
            }}
            className="text-[24px] max-[600px]:text-[14px]"
          >
            <a href="https://iiitranchi.ac.in/" target="_blank">
              Indian Institute of Information Technology
            </a>
          </h3>
          <h3
            style={{
              fontFamily: "GT Pressura",
              color: "#06ED86",

              fontWeight: "400",
            }}
            className="text-[24px] max-[600px]:text-[12px]"
          >
            Ranchi, India
          </h3>
        </div>
        <p
          style={{
            fontFamily: "GT Pressura",
            color: "#F1F1F1",
            fontSize: "18px",
          }}
          className="mx-10 px-3"
        >
          B. Tech (Hons) in Computer Science and Engineering
        </p>
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

export default Education;
