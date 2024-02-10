import HomeNav from "../Navbars/HomeNav";
import { FaLocationDot } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import SearchHome from "../HomeComp/SearchHome";
import { useState } from "react";
import './Home.css';
function HomeHeader()
{  
    const [searchItem,setSearchItem]= useState('');
    function searchHandler(event)
    {
        setSearchItem(event.target.value);
        
    }
    return(
        <>
        <div className="Home-headdd">
            <HomeNav/>
            <div className="flex flex-col gap-7 items-center mt-14">
                <p className="text-[4.5rem] font-black text-gray-50">Zomato</p>
                <p className=" text-white text-[2.5rem]">Discover the best food & drinks in Ahmedabad</p>

                <div className="flex  items-center bg-white py-2 mb-5  rounded-lg px-6 w-[50%]">
                    <div className="flex items-center">
                        <span className=" text-red-400 text-2xl pr-2"><FaLocationDot /></span>
                        <input type="text" placeholder="Ahmedabad" className="bg-white py-2 border-none outline-none"/>
                    </div>

                    <div className="mx-4 text-slate-400">|</div>

                    <div className="flex items-center w-[65%]">
                    <span className="text-2xl pr-2 text-slate-500"><CiSearch/></span>
                    <input type="text" name="searchquery" onChange={searchHandler} className="bg-white py-2 border-none outline-none w-full" placeholder="Search for restaurant, cuisine or a dish"/>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <SearchHome query={searchItem} />
        </div>
        </>
    )

}
export default HomeHeader;