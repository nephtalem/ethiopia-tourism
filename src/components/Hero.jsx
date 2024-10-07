import img from "/assets/female.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="h-[calc(100vh-4rem)] flex items-center sm:px-12 md:px-24 bg-cover bg-center relative">
      <div className="w-full md:flex md:items-center md:gap-5 md:justify-between relative z-10">
        <div className="max-w-[70vw] flex flex-col items-center mx-auto gap-10 md:items-start md:max-w-[40vw] md:gap-6 md:mx-0">
          <h1 className="text-3xl font-bold sm:text-5xl text-white text-center sm:text-left font-halant">
            Explore Ethiopia
          </h1>
          <p
            className="text-center text-lg md:text-start md:text-sm md:max-w-md text-white tracking-wide"
           
          >
            Discover breathtaking landscapes and rich cultural heritage in
            Ethiopia. Join us for unforgettable experiences.
          </p>
          <button
            onClick={() => navigate("about")}
            className="bg-white text-blue-600 font-semibold py-2 px-8 w-44 rounded-md shadow-md hover:bg-blue-600 hover:text-white transition duration-300 mt-4 "
          >
            Learn More
          </button>
        </div>
        <div className="hidden md:block lg:h-[400px] lg:w-[400px] xl:h-[450px] xl:w-[450px] rounded-full overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-110 bg-lightBrown">
          <img
            src={img}
            alt="Explore Ethiopia"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
