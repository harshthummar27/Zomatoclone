import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import CollectionNav from "../../Navbars/CollectionNav";
import Restaurant from "./Restaurants";
import Collection from "./Collection";
import Accordian from "../Accordian";
import { collection } from "../../../Data/collection";

function CollectionPlaceDetail() {
    const [placeInfo, setplaceInfo] = useState([]);
    // console.log(collection);
    const location = useLocation();

    useEffect(() => {
        //for top of page and smooth
        window.scrollTo({ top: 0, behavior: 'smooth' })
        
        if (location.pathname.includes('Ahmedabad/')) {
            const restaurant = location.pathname.split("/").at(-1);
            const title = restaurant.replaceAll("-", " ");

            if (collection.length > 0) {
                let restuarantDetail = collection.filter((place) => {
                    return place.name === title
                })
                setplaceInfo(restuarantDetail[0]);
                // console.log("res detail",restuarantDetail[0]);
            }
        }
    }, [location.pathname]);
    // console.log(placeInfo.restaurant);

    return (
        <div className=" w-[1100px] mx-auto">
            <div>
                <CollectionNav />
            </div>
            <div className="flex gap-1 my-4 transition-all duration-300">
               <Link to={'/'}> <p className=" hover:text-red-500">Home /</p></Link>
               <Link to={'/Ahmedabad/order-food-online'}> <p className=" hover:text-red-500">Ahmedabad /</p></Link>
               <Link to={'/'}> <p className=" hover:text-red-500">collectiones /</p></Link>
                <p className=" text-gray-500">{placeInfo.name}</p>
            </div>
            <div style={{ backgroundImage: `url(${placeInfo.image})` }} className="w-[1100px] mx-auto bg-cover bg-center bg-no-repeat h-[320px] text-white  relative text-start rounded-lg ">
                <div className=" absolute bottom-8 left-10 flex flex-col gap-2">
                    <h1 className=" text-5xl font-semibold">{placeInfo.name}</h1>
                    <p className=" text-lg">{placeInfo.desc}</p>
                    <p>{placeInfo.places} Places</p>
                </div>
            </div>

            <div className="flex flex-wrap w-[1100px] mx-auto mt-10 gap-5">
                {
                    placeInfo.restaurant &&

                    (placeInfo?.restaurant.length > 0)?(
                        placeInfo?.restaurant.map((res)=>(
                        <Restaurant key={res.id} data={res}/>
                    ))
                    ):(
                        <div>Data not found </div>
                    )
                }
                 
            </div>
            <div>
            <Collection/>
            </div>
            <div>
                <Accordian/>
            </div>
            
        </div>

    )

}

export default CollectionPlaceDetail;