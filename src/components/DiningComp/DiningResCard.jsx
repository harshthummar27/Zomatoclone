import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
function DiningResCard({ data }) {

    return (
        <Link to={`/Ahmedabad/dine-out/${data.name.replaceAll(" ","-")}/info`}>
        <div>
            <div className="hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl border border-gray-100  mb-4  ">
                <div style={{ backgroundImage: `url(${data.image})` }}
                    className=" rounded-xl  relative flex  mb-[123px] mx-3 mt-4  flex-col w-[330px] bg-cover h-[248px]    justify-center flex-wrap">
                    <div className=" text-white bg-gray-950 w-max  absolute  bottom-4 rounded-md">{data.discount &&  <p className=" flex gap-2 py-1 px-3"> <img src="https://b.zmtcdn.com/data/o2_assets/9b1ff9e19b7fadea6c6a57e081a1f5ac1687776279.png" height={18} width={18}/>{data.discount}% OFF</p>}</div>
                    <div className="absolute bottom-[-110px] px-2">
                        <div className="flex justify-between gap-18 ">
                            <h1 className=" text-lg ">{data.name}</h1>
                            <p className=" bg-green-700 relative left-16 px-2 rounded-lg text-white py-[1px] flex gap-1 justify-center items-center text-base">{data.Dining_Reviews}<span className=" text-xs"><FaStar/></span></p>
                        </div>

                        <div className=" text-start w-[248]">
                            <p className=" text-gray-800">{(data.dishes.lenght < 30) ? (data.dishes) : (`${data.dishes.substring(0, 35)}...`)}</p>
                        </div>
                        <div className=" text-start text-gray-700">{(data.location.lenght < 30) ? (data.location):(`${data.location.substring(0, 30)+"..."}`)}</div>
                        <div className=" flex justify-between">
                            <p className=" text-red-500">{(data.opentime !== "Open Now") ? (`Open At ${data.opentime}`) : (data.opentime)}</p>
                            <p className=" relative left-16">{data.gap} km</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    )

}
export default DiningResCard;