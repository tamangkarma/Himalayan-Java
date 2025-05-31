import Slider from "react-slick";

const Locations = [
  {
    id: 1,
    name: "BANSBARI",
    img: "https://himalayanjava.com/wp-content/uploads/2025/01/bansbari1.jpg",
  },
  {
    id: 2,
    name: "Lazimpat",
    img: "https://himalayanjava.com/wp-content/uploads/2025/04/lazimpat3.jpg",
  },
  {
    id: 3,
    name: "Kalikasthan",
    img: "https://himalayanjava.com/wp-content/uploads/2025/04/kalikasthan3.jpg",
  },
  {
    id: 4,
    name: "Nakkhu",
    img: "https://himalayanjava.com/wp-content/uploads/2024/12/nakkhu3.jpg",
  },
  {
    id: 5,
    name: "Babarmahal",
    img: "https://himalayanjava.com/wp-content/uploads/2024/12/babarmahal8.jpg",
  },
  {
    id: 6,
    name: "Boudha",
    img: "https://himalayanjava.com/wp-content/uploads/2024/06/ddddd.jpg",
  },
];

const OurLocations = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slideToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slideToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slideToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="py-14 mb-10">
        <div className="container">
          {/*Header Section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold font-cursive text-gray-800 ">
              Our Locations
            </h1>
          </div>

          {/* Testimonails cards Section */}
          <div>
            <Slider {...settings}>
              {Locations.map((data) => (
                <div key={data.id} className="my-6">
                  <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">
                    <div className="mb-4 flex justify-center">
                      <img
                        src={data.img}
                        alt={data.name}
                        className=" md:w-72 lg:w-96 object-contain"
                      />
                    </div>

                    <div className="">
                      <div className="space-y-3">
                        <p className="text-xl text-center font-bold text-gray-500">
                          {data.name}
                        </p>
                        <h1>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Veritatis tenetur quo, itaque repudiandae
                          possimus obcaecati eius voluptatibus incidunt dolorem.
                          Nesciunt voluptas illum eaque nostrum, excepturi nisi
                          velit sed earum beatae?
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurLocations;
