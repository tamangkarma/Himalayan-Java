import Heroimg from "../../public/coffee photo/heroimg.png"
import Services from "./Services"
const Homepage = () => {
  return (
    <>
      <div className=" min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white ">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Text Content Section */}
            <div className="order-2 sm:order-1 flex flex-col justify-center gap-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl text-black font-bold ">
              We serve the richest <span className="text-fontcolor font-cursive">Coffee</span> in the city
              </h1>
              <div className="">
                <button className="bg-gradient-to-r from bg-primary to to-secondary border-2 border-primary rounded-full px-4 py-2 hover:scale-105 duration-200">Coffee And Code</button>
              </div>
            </div>  
        
          {/* Image Section */}
            <div className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative">
              <img className="w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin"
                src={Heroimg} alt="" 
              />
              <div className="bg-gradient-to-t from-primary to-secondary absolute top-10 left-10 p-3 rounded-xl">
                <h1>Good Time</h1>
              </div>
              <div className="bg-gradient-to-t from-primary to-secondary absolute bottom-10 right-10 p-3 rounded-xl">
                <h1>Good Coffee</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <Services />
    </>
  )
}

export default Homepage
