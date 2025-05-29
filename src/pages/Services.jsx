import Img1 from "../../public/coffee photo/espresso1.png";
import Img2 from "../../public/coffee photo/Cappuccino.png";
import Img3 from "../../public/coffee photo/americano.png";
import Img4 from "../../public/coffee photo/latte.png"


const ServicesData = [
    {
        id: 1,
        img: Img1,
        name: "Espresso",
        description: "A strong and bold coffee made by forcing hot water through finely-ground coffee beans.",
        aosDelay: "100",
    },
    {
        id: 2,
        img: Img2,
        name: "Cappuccino",
        description: "A classic Italian coffee drink made with equal parts espresso, steamed milk, and frothed milk.",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        name: "Americanno",
        description: "An Americano is a classic espresso-style drink with a smooth and well-rounded flavor. ",
        aosDelay: "300",
    },
    
]

const Services = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* header title */}
          <div className="text-center mb-20 ">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              Best Coffee For You
            </h1>
          </div>

          {/* Services Card Section */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {
             ServicesData.map((data, index)=>{
                return(
                    <div 
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay}
                    key={index}
                    className="rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative"
                    >
                        {/* Image Section */}
                        <div className="h-[122px">
                            <img
                             src={data.img} 
                             alt="" 
                             className="max-w-[200px] mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300"
                            />
                        </div>

                        {/* Text-Content */}
                        <div className="p-4 text-center ">
                            <h1 className="text-xl font-bold">{data.name}</h1>
                            <p className="text-gray-500 group-hover:text-white duration-300 text-sm  ">{data.description}</p>
                        </div>

                    </div>
                )
             })
            }
            <div className="">

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
