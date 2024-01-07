import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-1 lg:grid-cols-3 bg-gradient-to-r from-[#F6D365] to-[#FDA085] rounded-t-3xl  lg:px-32">
        <div className="text-gray-600 text-center pt-16 lg:py-16 lg::py-24">
          


          <h2 className="font-medium text-xl lg:text-2xl mb-6">
            CONTACT US
          </h2>
          <p className="font-medium lg:text-xl">
            Hello Car, The Netherlands 
          </p>
          <p className="font-medium lg:text-xl">+00 123456789</p>
          <p className="font-medium lg:text-xl">info@hello.com</p>
        </div>
        <div className="w-[1px] h-52 my-auto bg-gray-600 mx-auto hidden lg:block"></div>
        <div className="text-gray-600 text-center lg:text-xl py-16 lg:py-24">
          <h2 className="font-medium text-xl lg:text-2xl mb-6">
            Follow US On
          </h2>
          <div className="flex items-center justify-center gap-8 text-2xl md:text-3xl">
            <NavLink>
              <FaFacebook />
            </NavLink>
            <NavLink>
              <FaInstagramSquare />
            </NavLink>
            <NavLink>
              <FaTwitterSquare />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="bg-[#151515] text-center py-4">
        <p className="font-medium text-xs md:text-xl text-white">
        @copyright 2024 zakiaaktar.nila@gmail.com || All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
