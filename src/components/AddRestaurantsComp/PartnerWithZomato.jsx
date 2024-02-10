function PartnerWithZomato()
{
    return(
        <div>
            <div className=" w-[800px] mx-auto py-10">
                <div className=" text-center py-10">
                    <h1 className=" text-4xl  font-semibold">Why should you partner with Zomato?</h1>
                    <p className=" text-xl text-zinc-600 py-4">Zomato enables you to get 60% more revenue, 10x new customers and boost your brand visibility by providing insights to improve your business.</p>
                </div>
                <div className="flex gap-7 pb-8 ">
                    <div className="flex items-center py-5   px-8  shadow-[0_5px_20px_rgb(0,0,0,0.12)] rounded-lg  gap-5 text-start">
                        <div>
                            <img src="https://b.zmtcdn.com/merchant-onboarding/d2bcadb70abdd99811cceda4cc757f5a1600670711.png" alt="" />
                        </div>
                        <div className="">
                            <p className=" text-xl text-blue-700">1000+ cities</p>
                            <p className=" text-lg ">in India</p>
                        </div>
                    </div>

                    <div className="flex items-center py-5   px-8 shadow-[0_5px_20px_rgb(0,0,0,0.12)]  rounded-lg  gap-5 text-start">
                        <div>
                            <img src="https://b.zmtcdn.com/merchant-onboarding/77b29f40bd0fb6c74c78695b07cdee901600670728.png" alt="" />
                        </div>
                        <div>
                            <p className=" text-xl text-blue-700">3 lakh+</p>
                            <p className=" text-lg">restaurant listings</p>
                        </div>
                    </div>

                    <div className="flex items-center shadow-[0_5px_20px_rgb(0,0,0,0.12)]  py-5   px-8 rounded-lg  gap-5 text-start">
                        <div>
                            <img src="https://b.zmtcdn.com/merchant-onboarding/e2b1283698fb6d3532c2df0c22a11fca1600670743.png" alt="" />
                        </div>
                        <div>
                            <p className=" text-xl  text-blue-700">5.0 crore+</p>
                            <p className=" text-lg">monthly orders</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PartnerWithZomato;