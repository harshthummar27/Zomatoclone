function HowWork()
{
    return(
        <div className="w-full bg-[url(https://b.zmtcdn.com/merchant-onboarding/f57794be6408563354c463c702ab45b91600672364.png)] bg-cover bg-no-repeat h-[370px] mb-36">
            <div className=" w-[800px] mx-auto">
                <h1 className=" font-semibold  text-3xl text-gray-700 py-10">How it works?</h1>
                <div className="flex gap-8 justify-center">
                    <div className=" w-[380px] rounded-md shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-white px-5 py-5 flex flex-col justify-between items-center">
                        <div className="pt-4 pb-8" >
                            <p className="bg-red-50 w-max p-4 rounded-full">
                            <img src="https://b.zmtcdn.com/merchant-onboarding/ecb5e086ee64a4b8b063011537be18171600699886.png" alt="" />
                            </p>
                        </div>
                        <div className="flex gap-2 flex-col">
                            <p className=" text-lg font-semibold">Step 1</p>
                            <p className=" text-lg text-gray-600">Create your page on Zomato</p>
                            <p className=" text-[15px]">Help users discover your place by creating a listing on Zomato</p>
                        </div>
                    </div>
                    <div className=" w-[380px] rounded-md shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-white px-5 py-5 flex flex-col justify-between items-center">
                        <div className="pt-4 pb-8" >
                            <p className="bg-red-50 w-max p-4 rounded-full">
                            <img src="https://b.zmtcdn.com/merchant-onboarding/71d998231fdaeb0bffe8ff5872edcde81600699935.png" alt="" />
                            </p>
                        </div>
                        <div className="flex gap-2 flex-col">
                            <p className=" text-lg font-semibold">Step 2</p>
                            <p className=" text-lg text-gray-600">Register for online ordering</p>
                            <p className=" text-[15px]">And deliver orders to millions of customers with ease</p>
                        </div>
                    </div>
                    <div className=" w-[380px] rounded-md shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-white px-5 py-5 flex flex-col justify-between items-center">
                        <div className="pt-4 pb-8" >
                            <p className="bg-red-50 w-max p-4 rounded-full">
                            <img src="https://b.zmtcdn.com/merchant-onboarding/efdd6ac0cd160a46c97ad58d9bbd73fd1600699950.png" alt="" />
                            </p>
                        </div>
                        <div className="flex gap-2 flex-col">
                            <p className=" text-lg font-semibold">Step 3</p>
                            <p className=" text-lg text-gray-600">Start receiving orders online</p>
                            <p className=" text-[15px]">Manage orders on our partner app, web dashboard or API partners</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowWork;