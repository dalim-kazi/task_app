import { LuUser2 } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
const Navbar = () => {
    return (
        <div className="flex justify-between mx-auto py-6 px-1 sm:px-6">
            <div>
                <p className="text-2xl mr-3 sm:mr-5 " style={{fontFamily:"Lemon"}}>Pti</p>
            </div>
            <div className="w-full flex justify-center">
                <div className="mr-2 md:mr-4 relative">
                    <input
                        type="search"
                        placeholder="Search..."
                        className="p-2  px-6 lg:px-10 rounded border-none focus:outline-none bg-white mobile:w-[13rem] md:w-[22rem] lg:w-[30rem] xl:w-[50rem] "
                    />
                    <IoSearchOutline className=" absolute top-3 left-1 lg:left-2 text-orange-500" />
                </div>
                <div>
                    <select className="p-2 px-2 rounded w-full  max-w-xs border-none focus:outline-none cursor-pointer">
                        <option value="MENU" selected>
                            MENU
                        </option>
                        <option value="Home">Home</option>
                        <option value="Details">Details</option>
                        <option value="Category">Category</option>
                        <option value="MY Favorites">MY Favorites</option>
                        <option value="Profile">Profile</option>
                        <option value="Log In/ Sign Up">Log In/ Sign Up</option>
                    </select>
                </div>
            </div>
            <div className="hidden mobile:block ml-2">
                <button className="btn btn-circle bg-red-600 hover:bg-orange-400 ">
                    <LuUser2 className="text-2xl text-white" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;