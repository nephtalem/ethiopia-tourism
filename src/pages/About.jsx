import Slider from "../components/Slider";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";

const About = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[url('/assets/bg-2.png')] bg-cover min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-between px-8 pt-8 md:space-x-8">
        <div className="md:w-1/2 w-full">
          <Slider />
        </div>

        <div className="bg-white bg-opacity-80 p-8 rounded-lg md:w-1/2 w-full mt-10 md:mt-0">
          <h1 className="text-3xl font-bold sm:text-6xl text-center text-darkbrown mb-4 mb-10 ">
            About Us
          </h1>
          <p className="text-brown mb-6 text-lg text-center ">
            We specialize in providing unforgettable experiences in Ethiopia,
            from breathtaking landscapes to rich cultural heritage.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-lightBrown">
            <div className="p-4 text-center border-r-0  lg:border-r-2 border-white">
              <h3 className="text-2xl font-semibold text-white">
                <CountUp end={126} suffix=" Million+" duration={2} />
              </h3>
              <h4 className="text-white">Total Population</h4>
            </div>

            <div className="p-4 text-center border-r-0  lg:border-r-2 border-white">
              <h3 className="text-2xl font-semibold text-white">
                <CountUp end={900000} separator="," duration={2} />
              </h3>
              <h4 className="text-white">Annual Tourists</h4>
            </div>

            <div className="p-4 text-center">
              <h3 className="text-2xl font-semibold text-white">
                <CountUp end={12} duration={2} />
              </h3>
              <h4 className="text-white">Heritage Sites</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10 mb-10">
        <button
          className="border-2 border-white text-white bg-lightblue py-2 px-8 w-44 rounded-lg transition-transform transform hover:scale-105 hover:bg-brown hover:text-white"
          onClick={() => navigate("/")}
        >
          Back To Home
        </button>
      </div>
    </section>
  );
};

export default About;
