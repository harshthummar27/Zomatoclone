import { Link, useLocation } from "react-router-dom";
import CollectionNav from "../Navbars/CollectionNav";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeliveryRes from "../../Data/DeliveryData";
import { MdOutlineDirections } from "react-icons/md";
import { CiBookmarkPlus } from "react-icons/ci";
import { RiShareForwardLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { AddCartItem, RemoveCartItem } from "../../features/Slices/CartSlice";
import toast from "react-hot-toast";

function DeliveryResDetails() {
    const [Restaurants, setRestaurants] = useState([]);
    const dispatch = useDispatch();
    const CartData = useSelector((state) => state.Cart.CartItem);
    console.log(CartData);

    function AddToCartBtn(item)
    {
        dispatch(AddCartItem(item));
        toast.success("Item Added");
        console.log(CartData);
    }

    function RemoveToCartBtn(id)
    {
        dispatch(RemoveCartItem(id));
        toast.success("Item Removed");
        console.log(CartData);
    }


    const location = useLocation();
    const name = location.pathname.split("/").at(-2);
    const title = name.replaceAll("-", " ");

    // console.log(title);
    // console.log(DeliveryRes);
    // console.log("Foods",Restaurants.Foods)
    // const DeliveryData = useSelector((state)=>state.Delivery.DeliveryResData);
    // console.log("deliverydata:",DeliveryData);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        let RestaurantsDetail = DeliveryRes.filter((res) => {
            return res.name == title;
        })
        // console.log(RestaurantsDetail[0]);
        setRestaurants(RestaurantsDetail[0]);
    }, [location.pathname]);

    return (
        // header 
        <div className="w-[1100px] mx-auto">
            <div className="flex flex-col gap-2 text-start">
                <div>
                    <CollectionNav />
                </div>
                <div className="flex gap-1 my-4 transition-all duration-300">
                    <Link to={'/'}> <p className=" hover:text-red-500">Home /</p></Link>
                    <Link to={'/Ahmedabad/order-food-online'}><p className="hover:text-red-500 text-gray-600">Ahmedabad Restaurants /</p></Link>
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
                    <p className=" text-lg mt-1"><span className=" text-red-500">Opening Time -</span> {Restaurants.openTime} - {Restaurants.CloseTime} (Today)</p>

                    <div className="flex gap-3 my-3">
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
            </div>

            {/* foods  */}
            <div className=" ">
                <h1 className=" text-start my-4 text-red-600 font-semibold text-3xl">Order Online</h1>
                {
                    (Restaurants.Foods) ? (

                        Restaurants.Foods.map((item) => (
                            <div key={item.id} className=" gap-6 flex mb-8 mt-20 ">
                                <div className=" w-[130px] h-[130px]">
                                    <img src={item.image} className=" w-full rounded-lg" width={130}></img>
                                    <div className=" mt-2 ">
                                        {
                                            (CartData.some((CartItem) => CartItem.id === item.id))?(
                                                <button className=" py-3 px-3 bg-red-500 text-white text-xs font-semibold rounded-xl" onClick={()=>RemoveToCartBtn(item.id)}  >Remove To Cart</button>
                                            ):(
                                                <button className="py-3 px-6 bg-slate-800 text-white text-xs font-semibold rounded-xl" onClick={()=>AddToCartBtn(item)} >Add To Cart</button>   
                                            )
                                        }
                                        {/* // {
                                        //     CartData.some((Cartitem)=> Cartitem.id == item.id) ? (
                                        //         <button className=" py-2 px-3 bg-red-500 text-white text-xs font-semibold rounded-xl" >Remove To Cart</button>
                                        //     ) : (
                                        //         <button className="py-2 px-3 bg-slate-800 text-white text-xs font-semibold rounded-xl" >Add To Cart</button>
                                        //     )
                                        // } */}
                                    </div>
                                </div>
                                <div className="text-start w-[70%] flex flex-col gap-1">
                                    <h1 className=" text-lg ">{item.name}</h1>
                                    <p className=" text-base text-gray-700 font-semibold">₹{item.price}</p>
                                    <p className=" text-[15px] text-gray-500">{item.desc}</p>
                                </div>
                            </div>
                        ))

                    ) : (
                        <div>Foods not found</div>
                    )
                }
            </div>
        </div>
    )
}

export default DeliveryResDetails;