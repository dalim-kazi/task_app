import image from '../../assets/footer/Image2.png';
import { AiOutlineGoogle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-7 justify-between items-center bg-yellow-600 text-white p-5 md:p-10 pr-10 mt-20">
      {/* Left Section */}
      <nav className="md:col-span-5 mx-auto">
        <div className="mb-4 md:mb-0 relative">
          <input
            type="search"
            placeholder="Enter Your Email"
            className="p-3 rounded-[3rem] border focus:outline-none bg-white text-black w-full md:w-[20rem] lg:w-[30rem] xl:w-[40rem]"
          />
          <button className="absolute flex items-center gap-2 top-1 bottom-1 px-5 right-0 sm:right-4 bg-red-600 text-white p-2 rounded-[2rem] ml-2">
            <p>Subscribe </p><IoIosArrowRoundForward className='text-3xl'/>
          </button>
        </div>
        <div className='flex justify-between items-center mt-14'>
          <div className='text-black'>
            <p className='font-semibold text-xl' style={{fontFamily:"Lemon"}}>Pti</p>
            <p className="text-sm font-semibold">
              Copyright@Tripp. All Rights Reserved
            </p>
          </div>
          <div className='flex ml-20 sm:ml-32'>
            <button className="btn btn-sm me-3 btn-circle">
              <AiOutlineGoogle className='text-red-600' />
            </button>
            <button className="btn me-3 btn-sm btn-circle">
              <FaTwitter className='text-red-600' />
            </button>
            <button className="btn btn-sm btn-circle">
              <FaInstagram className='text-red-600' />
            </button>
          </div>
        </div>
      </nav>

      {/* Right Section */}
      <nav className="md:col-span-1 justify-end hidden lg:block">
        <img className="w-full md:w-auto" src={image} alt="Logo" />
      </nav>
    </footer>
  );
};

export default Footer;