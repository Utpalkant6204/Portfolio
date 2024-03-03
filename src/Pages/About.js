import Layout from "../Layout";

function About() {
  return (
    <Layout className="container" style={{ backgroundColor: "black" }}>
      <div className="flex flex-col justify-center items-center h-full mt-10">
        <div className="justify-center items-center text-white">
          <h1
            className="text-4xl font-mono tracking-widest mb-3 text-gray-400"
            style={{ fontFamily: "Poppins,sans-serif" }}
          >
            ABOUT ME
          </h1>
          <div className="border-2 rounded-full m-3 border-lime-400"></div>
        </div>
      </div>
      <div className="block text-center text-gray-300 text-2xl font-medium max-w-screen-lg mx-auto my-8 leading-relaxed max[1000px]:mx-4">
        <p>
          👋 Hi there! Here you will find more information about me, what I do,
          and my current skills mostly in terms of programming and technology
        </p>
      </div>

      <div className="my-14 mx-24 max-[600px]:mx-4 max-[1000px]:mx-8">
        <h3
          style={{
            fontFamily: "GT Pressura Mono, monospace",
            textTransform: "uppercase",
            letterSpacing: "3px",
            fontSize: "16px",
            color: "#F1F1F1",
            fontWeight: "bold",
          }}
          className="py-10 px-10 max-[600px]:px-5"
        >
          Education
        </h3>
      </div>
    </Layout>
  );
}

export default About;
