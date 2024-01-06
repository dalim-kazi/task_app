import Banner from "../Banner/Banner";
import Popular from "../Popular/Popular";
import RecommendedProducts from "../RecommendedProducts/RecommendedProducts";

const Home = () => {
    return (
        <div className="mx-3">
          <Banner />
            <Popular /> 
          <RecommendedProducts/>  
        </div>
    );
};

export default Home;