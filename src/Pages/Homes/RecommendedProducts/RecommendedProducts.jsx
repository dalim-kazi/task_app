import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProductsAsync } from "../../../Feature/Action/ProductsAction/ProductsAction";
import ProductSwiper from "../../../Component/ProductSwiper/ProductSwiper";
import AddProductsModel from "../../../Component/AddProductsModel/AddProductsModel";

const RecommendedProducts = () => {
    const disPatch = useDispatch()
    const {products,isLoading,isError} = useSelector((state) => state.products)
    const popularProducts = products?.filter(item => item.IsRecommended === true)
    console.log(popularProducts)
    useEffect(() => {
       disPatch(GetAllProductsAsync()) 
    },[disPatch])
    return (
        <div className="mt-20">
        <div className="flex justify-between mb-5 mx-2">
            <p className="font-semibold text-lg">Recommended</p>
            <div>
                    <button className="text-red-600 font-semibold" onClick={() => document.getElementById('add-products').showModal()}>AddMore</button>
                    <AddProductsModel/>
                </div>
        </div>
        <div className="">
            <ProductSwiper products={popularProducts} isLoading={isLoading} isError={isError} />
        </div>
    </div>
    );
};

export default RecommendedProducts;