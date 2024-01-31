import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AnimatedCursor from "react-animated-cursor";


const Layout = ({ children }) => {
  return (
    <div>
    <AnimatedCursor
     innerSize={8}
     outerSize={35}
     innerScale={1}
     outerScale={2}
     outerAlpha={0}
     hasBlendMode={false}
     innerStyle={{
       backgroundColor: 'red'
     }}
     outerStyle={{
       border: '3px solid #2596be'
     }}
    />
      <Header/>
      <main className="min-h-[70vh]">{children}</main>
      <Footer />
    </div>
  );
};
// className="min-h-[100vh]"
export default Layout;