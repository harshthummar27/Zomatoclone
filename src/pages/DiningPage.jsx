import { useEffect, useState } from "react";
import DeliveryAndDiningHeader from "../components/Headers/Delivery&DiningHeader";
import Collection from "../components/HomeComp/collection/Collection";
import { useDispatch, useSelector } from "react-redux";
import { AddAllDiningRes } from "../features/Slices/DiningSlice";
import DiningResCard from "../components/DiningComp/DiningResCard";
import Accordian from "../components/HomeComp/Accordian";
import { BsFilterSquare } from "react-icons/bs";
import { MdOutlineStarRate } from "react-icons/md";
import { FcClearFilters } from "react-icons/fc";

function DiningPage() {
    const [DiningRes, setDiningRes] = useState([]);
    const dispatch = useDispatch();
    const DiningResData = useSelector((state) => state.Dining.DiningRes);


    useEffect(() => {
        //for top of page and smooth
        window.scrollTo({ top: 0, behavior: 'smooth' })

        dispatch(AddAllDiningRes());
        setDiningRes(DiningResData);
    }, [DiningResData]);

    // console.log("state",DiningRes);

    function RatingFilterHandler()
    {
        const filtered = DiningRes.filter((item)=>{
            return item.Dining_Reviews >= 4.0
        })
        // console.log("rating filter",filtered);
        setDiningRes(filtered);
    }

    function GoldFilterHanlder()
    {
        const filtered = DiningRes.filter((item)=>{
            if(item.discount)
                return item
            else
               return
        })
        // console.log("offer Discount:",filtered);
        setDiningRes(filtered);
    }



    return (
        <div>
            <DeliveryAndDiningHeader />
            <div className=" py-5 mb-10 bg-slate-50 w-full">
                <Collection />
            </div>
            <div className=" w-[1100px] mx-auto">
                <img width={1100} height={250} className=" rounded-xl my-6" src="https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png" alt="" />
            </div>
            <h1 className=" w-[1100px] mx-auto my-6 text-start font-semibold text-3xl pl-3 text-gray-800">Trending dining restaurants in Ahmedabad, Gujarat, India</h1>
            <div className=" flex pl-2 mt-5 mb-3 gap-3 w-[1100px] mx-auto">
                    <div className="flex items-center gap-2 text-lg py-1 px-2 rounded-md cursor-pointer"> <span className=" text-red-500"><BsFilterSquare /></span>Filters</div>
                    <div className="flex items-center gap-2 border-2 py-1 px-2 rounded-md cursor-pointer" onClick={RatingFilterHandler}> <span className=" text-red-500"><MdOutlineStarRate /></span>Rating:4.0+</div>
                    <div className="flex items-center gap-2 border-2 py-1 px-2 rounded-md cursor-pointer" onClick={GoldFilterHanlder}> <span className="text-red-500"><img src="https://b.zmtcdn.com/data/o2_assets/577bf55ff265ae45e11cfe6911d176941687789024.png" alt="" width={20} /></span>Gold</div>
                    <div className="flex items-center gap-2  bg-slate-200 text-red-500   font-semibold border-2 py-1 px-2 rounded-md cursor-pointer" onClick={()=>setDiningRes(DiningResData)}> <span ><FcClearFilters /></span>Clear All</div>
                </div>
            <div className=" w-[1100px] mx-auto flex flex-wrap gap-4 mb-[30px]">
                {
                    (DiningRes.length > 0) ?
                        (
                            DiningRes.map((res) => (
                                <DiningResCard data={res} key={res.id} />
                            ))
                        ) : (
                            <div>
                                Dining Restaurants data not foud
                            </div>
                        )
                }
            </div>
            <div>
                <Accordian />
            </div>
        </div>
    )
}

export default DiningPage;