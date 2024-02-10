import { Link } from "react-router-dom";
import '../Headers/Home.css';

function DiningAndDineOutCard() {
    return (
        <div className="dinigflex gap-4 mx-auto  mt-9">
            <Link to={'/Ahmedabad/order-food-online'}>
            <div className=" relative  rounded-xl h-[230px] border  w-[535px] bg-no-repeat bg-cover hover:scale-105 hover:transition-all hover:duration-300  bg-center  bg-[url('https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*')]">
                <div className="absolute  bottom-[0px] bg-white w-full py-4 px-5 text-start">
                    <h1 className=" text-xl font-semibold">Order Online</h1>
                    <p className=" text-gray-700">Stay home and order to your doorstep</p>
                </div>
            </div>
            </Link>

            <Link to={'/Ahmedabad/dine-out'}>
            <div className=" h-[230px] w-[535px] rounded-xl border hover:scale-105 hover:transition-all hover:duration-300  relative bg-no-repeat bg-cover bg-center bg-[url('https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*')]">
                <div className=" bottom-[0px] absolute bg-white  w-full py-4 px-5 text-start">
                    <h1 className=" text-xl font-semibold">Dining</h1>
                    <p className=" text-gray-700">View the city's fovorurite dining venues</p>
                </div>
            </div>
            </Link>

        </div>

    )
}

export default DiningAndDineOutCard;