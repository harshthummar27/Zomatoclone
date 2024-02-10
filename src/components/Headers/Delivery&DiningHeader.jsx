import { useEffect, useState } from "react";
import CollectionNav from "../Navbars/CollectionNav";
import { Link, useLocation } from "react-router-dom";

function DeliveryAndDiningHeader() {
    const location = useLocation();

    const type = location.pathname.split('/').at(-1);
    // console.log(type);

    const [isDelivery, setDilivery] = useState(false);
    const [isDineOut, setDineOut] = useState(false);

    useEffect(() => {
        if (type == "dine-out")
            setDineOut(true);
        else
            setDilivery(true);
    }, [location.pathname]);

    return (
        <div className=" w-[1100px] mx-auto">
            <CollectionNav />
            <div className="flex gap-1 my-4 transition-all duration-300">
                <Link to={'/'}> <p className=" hover:text-red-500">Home /</p></Link>
                <p className=" text-gray-600">Ahmedabad Restaurants</p>
            </div>
            <div className="flex justify-start gap-4 my-4">


                {/* Delivery  */}
                <Link to={'/Ahmedabad/order-food-online'}>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <div className="flex gap-2 items-center justify-center">
                            <div className=" p-3 bg-slate-100 rounded-full">
                                {
                                    (isDelivery) ? (<img src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp" alt="" height={30} width={30} />) :
                                        (<img src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png" alt="" height={30} width={30} />)
                                }
                            </div>
                            <div>
                                <h1 className={`(${(isDelivery) ? (" text-red-400") : ("text-gray-600")} font-semibold  text-xl`}>Delivery</h1>
                            </div>
                        </div>
                        {isDelivery &&
                            <div className="w-full border-2 border-red-400 mt-3"></div>
                        }
                    </div>
                </Link>

                {/* dine out  */}
                <Link to={'/Ahmedabad/dine-out'}>
                    <div className="flex gap-2 flex-col">
                        <div className="flex gap-2 items-center justify-center">
                            <div className=" p-3 bg-slate-100 rounded-full">
                                {
                                    (isDineOut) ? (<img src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png" alt="" height={30} width={30} />) :
                                        (<img src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp" alt="" height={30} width={30} />)
                                }
                            </div>
                            <div>
                                <h1 className={`${(isDineOut) ? (" text-red-400") : ("text-gray-600")} font-semibold  text-xl`}>Dining Out</h1>
                            </div>
                        </div>
                        {isDineOut &&
                            <div className=" border-2 border-red-400 mt-3"></div>
                        }
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default DeliveryAndDiningHeader;