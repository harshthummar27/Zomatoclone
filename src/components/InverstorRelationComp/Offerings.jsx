function Offerings() {
    return (
        <div className=" w-[1100px] mx-auto py-10">
            <h1 className=" font-bold text-4xl text-start my-7">Our core offerings</h1>
            <div className=" flex justify-between ">
                
            <div className="flex flex-col w-[330px] rounded-3xl bg-white pb-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <div className="flex h-[23%] items-center bg-red-100 w-full justify-between rounded-lg relative py-1 px-2 ">
                    
                        <img className="mt-4" src="https://b.zmtcdn.com/data/o2_assets/b51825c339e733d4d9b364df636d1ef11682669740.png" alt="" width={80} />
                        <p className=" font-bold text-xl  text-red-950 pr-4 pt-4 ">FOOD <br /> DELIVERY</p>
                    
                </div>
                <div>
                    <p className=" text-start my-3 px-4 text-lg text-slate-700">Food ordering and delivery platform where customers can search and discover local restaurants, order food, and have it delivered reliably and quickly</p>
                    <div className=" my-2 pb-2 border-b-2">
                        <p className=" text-start pl-5 font-semibold text-gray-800">Q2FY24</p>
                    </div>
                    <div className=" text-start px-4">
                        <h1 className=" font-bold text-2xl">INR 7,980 crore</h1>
                        <p>Food delivery GOV</p>
                    </div>
                    <div className=" text-start px-4 my-3">
                        <h1 className=" font-bold text-2xl">18.4 million</h1>
                        <p>Avg. monthly transacting customers</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col rounded-3xl bg-white w-[330px] pb-4  shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <div className="flex  h-[23%] items-center bg-red-100 w-full py-1 px-2  justify-between rounded-lg relative">
                    
                        <img className="mt-4" src="https://b.zmtcdn.com/data/o2_assets/c2fdc5b7c3a1b1aadd48fbe31e4d6eed1684136246.png" alt="" width={80} />
                        <p className=" font-bold text-xl  text-red-950 pr-4 pt-4 ">QUICK <br /> COMMERCE</p>
                    
                </div>

                
                <div>
                    <p className=" text-start my-3 px-4 text-lg text-slate-700 mb-10">Quick commerce platform where customers can order everyday needs across thousands of products and have them delivered within minutes</p>
                    <div className=" my-2 pb-2 border-b-2">
                        <p className=" text-start pl-5 font-semibold text-gray-800">Q2FY24</p>
                    </div>
                    <div className=" text-start px-4">
                        <h1 className=" font-bold text-2xl">INR 2,760 crore</h1>
                        <p>Quick commerce GOV</p>
                    </div>
                    <div className=" text-start px-4 my-3">
                        <h1 className=" font-bold text-2xl">4.7 million</h1>
                        <p>Avg. monthly transacting customers</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col rounded-3xl bg-white w-[330px] pb-4  shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <div className="flex  h-[23%] items-center bg-red-100 w-full py-1 px-2  justify-between rounded-lg relative">
                    
                        <img className="mt-4" src="https://b.zmtcdn.com/data/o2_assets/a892d88c8ad69348f8735ba9dd6b57831684136311.png" alt="" width={80} />
                        <p className=" font-bold text-xl  text-red-950 pr-4 pt-4 ">B2B <br /> SUPPLIES</p>
                    
                </div>

                
                <div>
                    <p className=" text-start my-3 px-4 text-lg text-slate-700 mb-16">Hyperpure is a B2B platform supplying high quality food ingredients and other products</p>
                    <div className=" my-2 pb-2 border-b-2">
                        <p className=" text-start pl-5 font-semibold text-gray-800">Q2FY24</p>
                    </div>
                    <div className=" text-start px-4">
                        <h1 className=" font-bold text-2xl">INR 745 crore</h1>
                        <p>Hyperpure revenue</p>
                    </div>
                    <div className=" text-start px-4 my-3">
                        <h1 className=" font-bold text-2xl">8</h1>
                        <p># of cities present in</p>
                    </div>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Offerings;