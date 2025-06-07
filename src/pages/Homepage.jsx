import Heroimg from "../../public/coffee photo/heroimg.png";
import Services from "./Services";
import BannerImg from "../../public/coffee photo/banner img.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import ShortAdBanner from "../components/Navbar/Advertisement";
import OurLocations from "../components/Navbar/locations";
import { useEffect } from "react";
import Aos from "aos";

const Homepage = () => {


  useEffect(()=>{
    Aos.init({duration:1000})
  });


  return (
    <>
    <div>
      <p>This is just the demo</p>
      <p>Hello updated</p>
    </div>
      <div className=" min-h-[550px] sm:min-h-[600px] bg-[#f9f7f3] flex justify-center items-center text-white ">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Text Content Section */}
            <div className="order-2 sm:order-1 flex flex-col justify-center gap-6">
              <h1 className="text-5xl ml-4 sm:ml-0 sm:text-6xl lg:text-7xl text-black font-bold ">
                We serve the richest{" "}
                <span className="text-amber-900 font-cursive">Coffee</span> in
                the city
              </h1>
              <div className="">
                <button className="bg-amber-900 border-2 ml-4 sm:ml-0 border-none rounded-full px-4 py-2 hover:scale-105 duration-200">
                  Life's a latte better with coffee.
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative">
              <img
                className="w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin"
                src={Heroimg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <Services />

      {/* Banner Section */}

      <div className="bg-[#edf2f4]">
        <div className="container flex justify-center items-center py-12 sm:grid-cols-2 sm:py-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Image section */}
            <div>
              <img
                src={BannerImg}
                alt=""
                className="w-full relative max-w-[350px] mx-auto drop-shadow-2xl sm:mt-10 "
                data-aos= "fade-right"
              />
            </div>

            {/* Text content section */}
            <div className="flex flex-col items-center justify-center gap-6 sm:py-6 ">
              <h1 className="text-3xl sm:text-4xl font-bold font-cursive"
              data-aos="fade-left"
              >
                Premium Blen Coffee
              </h1>
              <p 
              className="text-sm px-4 sm:px-0 text-gray-500 tracking-wide leading-5"
              data-aos="fade-up"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
                saepe ipsam fugiat recusandae repudiandae ad repellendus
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-4 ml-4 sm:ml-0" data-aos="fade-up">
                  <div>
                    <div className="flex items-center gap-3">
                      <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                      <span>Premium Coffee</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <IoFastFood className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                      <span>Hot Coffee</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <GiFoodTruck className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                      <span>Cold Coffee</span>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-primary/50 pl-6 space-y-3" data-aos="fade-left">
                  <h1 className="text-2xl  font-bold font-cursive">
                    Tea Lover
                  </h1>
                  <p className="text-gray-500 text-sm line-clamp-5">
                    {" "}
                    Much like writing code, brewing the perfect cup of tea
                    requires patience, precision, and a dash of passion to
                    create a comforting blend of flavors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advertisement Section */}
      <ShortAdBanner />

      <OurLocations/>
    </>
  );
};

export default Homepage;
