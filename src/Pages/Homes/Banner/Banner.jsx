import banner from '../../../assets/banner/Image1.png'
const Banner = () => {
    return (
        <div className='sm:flex justify-center sm:justify-between items-center sm:bg-orange-400 rounded-[2rem] mt-20 w-full p-5'>
            <div className='w-full text-center sm:text-start sm:mx-10'>
                <h1 className='sm:text-white text-3xl font-bold mb-5'>Deliver Food To Your <br /> Door Step1</h1>
                <p className='sm:text-white text-lg'>Authentic Food, Quick Service , First Delivery</p>
            </div>
            <div className='bg-red-400 sm:bg-orange-400 rounded-full w-full sm:w-1/2 mx-auto mt-10 sm:mt-0'>
                <img className='w-full' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;