import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DiningData } from "../../Data/DiningData";
import CollectionNav from "../Navbars/CollectionNav";
import { MdOutlineDirections } from "react-icons/md";
import { CiBookmarkPlus } from "react-icons/ci";
import { RiShareForwardLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";

function DiningResDetails() {
    const [Restaurants, setRestaurants] = useState([]);
    const location = useLocation();
    const name = location.pathname.split('/').at(-2);
    const title = name.replaceAll("-", " ");
    // console.log(title);

    useEffect(() => {
        window.scrollTo({top:0,behavior:'smooth'})
        const ResDetails = DiningData.filter((res) => {
            return res.name == title;
        })
        setRestaurants(ResDetails[0]);
    }, [location.pathname])
    // console.log("Res details:", Restaurants);
    return (
        <div className=" w-[1100px] mx-auto">
            {
                (Restaurants) ? (
                    <div className="flex flex-col gap-2 text-start">
                        <div>
                            <CollectionNav />
                        </div>
                        <div className="flex gap-1 my-4 transition-all duration-300">
                            <Link to={'/'}> <p className=" hover:text-red-500">Home /</p></Link>
                            <Link to={'/Ahmedabad/dine-out'}><p className="hover:text-red-500 text-gray-600">Ahmedabad Restaurants /</p></Link>
                            <p className=" text-gray-400">{Restaurants.name}</p>
                        </div>
                        <div className="w-full h-[370px] overflow-hidden">
                            <div className="w-full h-full hover:scale-110 transition-all duration-500  bg-no-repeat bg-cover rounded-lg bg-center" style={{ backgroundImage: `url(${Restaurants.image})` }}></div>
                        </div>
                        <div>
                            <div className="flex justify-between mt-2">
                                <h1 className=" text-4xl font-semibold">{Restaurants.name}</h1>
                                <div className="flex gap-8  justify-center items-center">
                                    <div>
                                        <p className=" flex gap-1 items-center bg-green-800 text-lg text-white w-max px-2 py-[1px] rounded-lg">{Restaurants.Delivery_Reviews} <span className="text-xs"><FaStar /></span></p>
                                        <p className=" text-base">Dining Ratings</p>
                                    </div>
                                    <div>
                                        <p className=" flex gap-1 items-center bg-green-800 text-lg text-white w-max px-2 py-[1px] rounded-lg">{Restaurants.Dining_Reviews} <span className="text-xs"><FaStar /></span></p>
                                        <p className=" text-base">Delivery Ratings</p>
                                    </div>
                                </div>
                            </div>
                            <p className=" text-lg text-gray-700 mt-1">{Restaurants.dishes}</p>
                            <p className=" text-base  text-gray-600 mt-1" >{Restaurants.location}</p>
                            <p className=" text-lg mt-1"><span className=" text-red-500">Opening Time -</span> {Restaurants.opentime}</p>

                            <div className="flex gap-3 mt-3 mb-14">
                                <div className=" border-[1px] cursor-pointer py-2 flex rounded-xl px-2 items-center gap-2  border-gray-700">
                                    <span className=" text-xl text-red-500 "><MdOutlineDirections /></span>
                                    Direction
                                </div>
                                <div className="border-[1px] py-2 cursor-pointer flex rounded-xl px-2 items-center gap-2  border-gray-700">
                                    <span className=" text-xl text-red-500 "><CiBookmarkPlus></CiBookmarkPlus></span>
                                    Bookmark
                                </div>
                                <div className="border-[1px] py-2 cursor-pointer flex rounded-xl px-2 items-center gap-2  border-gray-700">
                                    <span className=" text-xl text-red-500 "><RiShareForwardLine /></span>
                                    Share
                                </div>
                            </div>
                        </div>
                    </div>) : (
                    <div>Data not found</div>
                )
            }
        </div>
    )
}

export default DiningResDetails;