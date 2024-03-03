import React from "react";

const Education = () => {
  return (
    <div className="my-14 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32">
      <h2
        style={{
          fontFamily: "GT Pressura Mono, monospace",
          textTransform: "uppercase",
          letterSpacing: "3px",
          fontSize: "16px",
          color: "#F1F1F1",
          fontWeight: "bold",
        }}
        className="pt-10 pb-8 px-10 sm:px-8 md:px-6 lg:px-4 xl:px-2"
      >
        Education
      </h2>
      <div className="px-10 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20">
        <div className="flex flex-col sm:flex-row justify-between">
          <h3
            style={{
              fontFamily: "GT Pressura",
              color: "#06ED86",
              fontSize: "24px",
              fontWeight: "400",
            }}
          >
            <span className="me-5">🎓</span>
            <a
              href="https://iiitranchi.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Indian Institute of Information Technology
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
            Ranchi, India
          </h3>
        </div>
        <p
          style={{
            fontFamily: "GT Pressura",
            color: "#F1F1F1",
            fontSize: "18px",
          }}
          className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 px-3"
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
