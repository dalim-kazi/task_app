import Home from "../../Pages/Homes/Home/Home";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div className="w-full">
            <Navbar />
            <Home />
            <Footer/>
        </div>
    );
};

export default Main;