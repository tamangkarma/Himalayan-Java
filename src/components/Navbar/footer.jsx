import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../../public/coffee photo/java-newlogo.png"

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <>
      <div>
        <div className="bg-secondary min-h-48 grid sm:grid-cols-2 md:grid-cols-4 ">
          <div className="flex justify-center mt-4 ">
            <img 
            src={logo} alt=""
            className="w-44 sm:h-36 md:h-32 "
            />
          </div>

          <div className="my-6 mx-6">
            <h1 className="text-2xl font-bold">Contact</h1>
            <div className="text-sm mt-4">
              <h1 className="text-base font-semibold" >Heade Office:</h1>
            <p>Tridevi Marg-26, Thamel, Kathmandu +97714512536</p>
            </div>

            <div className="text-sm mt-4">
              <h1 className="text-base font-semibold" >Administrative Office:</h1>
            <p>Purva Dhoka, Nagpokhari Lane, Kathmandu +97714512536</p>
            </div>

            <p className="mt-2 font-semibold">info@himalayanjava.com</p>
          </div>

          <div className="flex gap-6 justify-center md:mt-8">
            <div className=" border border-slate-600 h-8 py-2 px-2 rounded-full hover:scale-105">
              <FaFacebook/>
            </div>
            <div className="border border-slate-600 h-8 py-2 px-2 rounded-full hover:scale-105">
              <FaInstagram/>
            </div>
            <div className="border border-slate-600 h-8 py-2 px-2 rounded-full hover:scale-105">
              <FaLinkedin/>
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold mt-4 mx-4 ">Training & Workshop</h1>
            <div className="mx-5 my-2 text-sm">
              <p>Barista Traning</p>
              <p>Bakery Traning</p>
            </div>

          </div>
        </div>
       
      </div>
    </>
  );
};

export default Footer;
