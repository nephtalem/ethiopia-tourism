import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import img from "/assets/bg-trans-1.png";

const Landing = () => {
  return (
    <div className="bg-[url('/assets/bg-trans-1.png')] bg-cover min-h-screen font-roboto">
      <Navbar />
      <Hero />
      <div className="absolute inset-0 bg-black opacity-10 -z-10" />
    </div>
  );
};
export default Landing;
