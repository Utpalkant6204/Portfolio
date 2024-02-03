import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import "./home.css";

function Home() {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Header />
      <div className={`header-body ${isVisible ? "show" : ""}`}>
        <h1 className="header-name text-gray-200">Hey, I'm Utpal Kant 👋</h1>
      </div>
    </>
  );
}

export default Home;
