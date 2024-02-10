function Business() {
    return (
        <div className="w-[1100px] mx-auto flex flex-col gap-5">
            <div>
                <h1 className=" text-4xl text-start px-4 font-bold">Beyond business</h1>
                <p className=" text-xl font-semibold text-start px-4 text-gray-600 my-3">At Zomato, our business approach is guided by our commitment to responsible and sustainable growth. Our ESG update outlines the many ways in which we make the impact of our business more sustainable and help make the world a better place for everyone. Some of our key sustainability initiatives include:</p>
            </div>
            <div className="flex gap-2 justify-between">

                <div className="w-[350px] bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-2xl border">
                    <div className=" ">
                        <img className=" rounded-2xl" src="https://b.zmtcdn.com/data/o2_assets/1ef4b31977addf56d67ede5f6eed18a91691498028.png" alt="" />
                    </div>
                    <div className=" text-start px-4 py-5">
                        <h1 className=" text-2xl font-bold">Feeding India</h1>
                        <p className=" text-lg text-gray-600"> A not-for-profit organisation, designing interventions to reduce hunger and malnutrition among underserved communities in India.</p>
                    </div>
                </div>

                <div className="w-[350px] bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-2xl border">
                    <div className=" ">
                        <img className=" rounded-2xl" src="https://b.zmtcdn.com/data/o2_assets/41e873bace2423c2ee84d342fab887cd1691497904.png" alt="" />
                    </div>
                    <div className=" text-start px-4 py-5">
                        <h1 className=" text-2xl font-bold">Net zero emissions</h1>
                        <p className=" text-lg text-gray-600">Starting FY24, we have taken on a goal to achieve Net Zero emissions across Zomato’s food delivery value chain by 2033.</p>
                    </div>
                </div>

                <div className="w-[350px]  bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-2xl border">
                    <div className=" ">
                        <img className=" rounded-2xl" src="https://b.zmtcdn.com/data/o2_assets/081cec87b25796ece0ed45d89cd425691691497935.png" alt="" />
                    </div>
                    <div className=" text-start px-4 py-5">
                        <h1 className=" text-2xl font-bold">Reducing plastic waste</h1>
                        <p className=" text-lg text-gray-600">Trying to reduce Zomato’s plastic waste by ensuring completely plastic neutral deliveries since April 2022</p>
                    </div>
                </div>

                

            </div>
        </div>
    )

}
export default Business