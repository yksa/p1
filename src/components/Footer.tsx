import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";

import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-400 px-8 py-12">
      <div className="flex justify-between max-w-[1000px] mx-auto">
        <div className="text-white font-bold">LOGO</div>
        <div className="gap-8 hidden sm:flex text-gray-300 text-sm">
          <div className="flex flex-col">
            <a href="#" className="hover:text-red-500">
              Home
            </a>
            <a href="#" className="hover:text-red-500">
              Discovery
            </a>
            <a href="#" className="hover:text-red-500">
              Photos
            </a>
            <a href="#" className="hover:text-red-500">
              Contact
            </a>
          </div>
          <div className="flex flex-col">
            <a href="#" className="hover:text-red-500">
              About
            </a>
            <a href="#" className="hover:text-red-500">
              Help
            </a>
            <a href="#" className="hover:text-red-500">
              Terms
            </a>
            <a href="#" className="hover:text-red-500">
              Guidelines
            </a>
          </div>
          <div className="flex flex-col">
            <a href="#" className="hover:text-red-500">
              Testinomials
            </a>
            <a href="#" className="hover:text-red-500">
              Advertise
            </a>
            <a href="#" className="hover:text-red-500">
              Integrations
            </a>
            <a href="#" className="hover:text-red-500">
              Careers
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="relative">
            <Input
              type="email"
              placeholder="Email"
              className="border-gray-300 placeholder:text-xs placeholder:text-gray-300 w-full focus:border-0"
            />
            <IoIosSend className="absolute right-2 top-[10px] text-white" />
          </div>
          <p className="text-gray-300 text-sm mt-2">
            Stay in touch with us for the freshest products!
          </p>
        </div>

        <div className="flex gap-4">
          <a href="#" className="text-white hover:text-red-500">
            <FaInstagram />
          </a>
          <a href="#" className="text-white hover:text-red-500">
            <FaTwitter />
          </a>
          <a href="#" className="text-white hover:text-red-500">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white hover:text-red-500">
            <BiWorld />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
