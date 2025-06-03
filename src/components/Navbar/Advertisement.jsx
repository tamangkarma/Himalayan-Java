import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";

export default function ShortAdBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-white to-secondary text-white py-4 px-6 shadow-lg mt-6">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-4">
        <div className="text-lg md:text-2xl font-bold text-center text-gray-700 md:text-left">
           Himalayan Java is available for Android and IOS 
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="flex items-center bg-white text-black font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-100 transition"
          >
            <FaGooglePlay className="mr-2" /> Play Store
          </a>
          <a
            href="#"
            className="flex items-center bg-white text-black font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-100 transition"
          >
            <FaAppStoreIos className="mr-2" /> App Store
          </a>
        </div>
      </div>
    </div>
  );
}
