import { useDispatch, useSelector } from "react-redux";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { RemoveCartItem } from "../features/Slices/CartSlice";

function CartPage() {
    const CartItem = useSelector((state) => state.Cart.CartItem);
    const [TotalItem, setTotalItem] = useState(null);
    const [TotalPrice, setTotalPrice] = useState(null);

    const disptach = useDispatch();
    // console.log(CartItem);
    useEffect(() => {
        setTotalItem(CartItem.length);
        let TotalPrice = 0
        CartItem.every((item) => TotalPrice += item.price);
        setTotalPrice(TotalPrice);
    }, [CartItem])

    // console.log(TotalPrice);
    return (
        <div className="w-[1000px] mx-auto">
            <div className="flex justify-between items-center pt-7 px-8">
                <div>
                    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png " width={124} height={26} />
                </div>
                <div>
                    <Link to={'/'}><p className=" font-semibold text-xl border-2 py-2 px-4 rounded-xl hover:bg-slate-100 transition-all duration-700">Home</p></Link>
                </div>

            </div>
            <div className=" flex gap-10 mt-10 h-max">
                {/* cart items  */}
                <div>
                    {
                (CartItem.length !== 0) ? (
                            CartItem.map((item) => {
                                {
                                    return (
                                        <div key={item.id} className="flex items-center justify-between gap-10 mt-8 w-[500px] px-5 border-b-2 border-black pb-5  ">
                                            <div className=" w-[350px] overflow-hidden h-[160px] mb-4">
                                                <img src={item.image} className=" rounded-lg w-full h-full" />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <h2 className="text-slate-700 font-semibold text-lg text-left">
                                                    {item.name}
                                                </h2>
                                                <p className="text-left">
                                                    {
                                                        item.desc.substring(0, 100) + "..."
                                                    }
                                                </p>
                                                <div className="flex  justify-between gap-8 items-center mt-3">

                                                    <p className=" font-bold text-lg text-green-700">₹{item.price}</p>
                                                    <p onClick={() => disptach(RemoveCartItem(item.id))} className="p-2 bg-red-300 rounded-full text-red-950">
                                                        <AiTwotoneDelete className=" cursor-pointer" />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        ) : (
                            <div className=" flex justify-center items-center h-[70vh] w-full flex-col gap-5 relative left-[280%]">
                                <p className=" font-bold text-lg text-slate-700">Your Cart is empty</p>
                                <Link to={'/Ahmedabad/order-food-online'}>
                                    <button className=" py-2 px-8 bg-green-600 hover:bg-green-800 transition-all duration-700 rounded-lg text-white font-semibold">Order Now</button>
                                </Link>
                            </div>
                        )
                    }
                </div>

                {
                    CartItem.length > 0 &&
                    <div className=" flex gap-4 flex-col ">
                        <div>
                            <h2 className=" text-left text-lg text-green-800 font-semibold">YOUR CART</h2>
                            <h1 className=" text-left text-green-800 font-bold text-5xl">SUMMARY</h1>
                            <p className=" mt-6 text-left text-lg font-semibold text-slate-950">Total Item:{TotalItem}</p>
                        </div>
                        <div>
                            <p className="text-left mt-4  text-xl">Total Amount: <span className=" font-bold">₹{TotalPrice}</span></p>
                            <button className="flex justify-center items-center py-2 px-16 rounded-xl mt-3 bg-green-700 text-white font-semibold text-lg ">Checkout Now</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )

}

export default CartPage;