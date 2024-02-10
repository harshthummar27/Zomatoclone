function Blogs() {
    return (
        <div className=" w-[1100px] mx-auto py-6">
            <h1 className=" font-bold text-4xl text-start py-4">From our blogs</h1>
            <div className=" flex justify-between">
                <div className=" w-[355px] text-start rounded-md">
                    <div>
                        <img height={210} className=" pb-6" src="https://zomatoblog.com/wp-content/uploads/2024/01/blog-cover.png" alt="" />
                    </div>
                    <div className=" px-4 py-3">
                        <h2 className=" text-gray-700 py-2">Kanica Mandhania | 11 January 2024</h2>
                        <h1 className="  text-xl py-3">Unlocking performance, scalability</h1>
                        <p className=" text-gray-800">Zomato accomplished a seamless migration from TiDB to DynamoDB, ensuring no downtime or adverse effects on customer experience. </p>
                    </div>
                </div>
                <div className=" flex justify-between">
                    <div className=" w-[355px] text-start">
                        <div>
                            <img src="https://zomatoblog.com/wp-content/uploads/2024/01/image.png" alt="" />
                        </div>
                        <div className=" px-4 py-3">
                            <h2 className=" text-gray-700 py-2">Siddhant Mukherjee | 10 January 2024</h2>
                            <h1 className="  text-xl py-3">Turbocharging restaurant partners </h1>
                            <p className=" text-gray-800">Read about how with daily payouts we are helping restaurant partners with their working capital and helping them scale their business.</p>
                        </div>
                    </div>

                </div>


                <div className=" flex justify-between">
                    <div className=" w-[355px] text-start">
                        <div>
                            <img src="https://zomatoblog.com/wp-content/uploads/2023/12/image4.png" alt="" />
                        </div>
                        <div className=" px-4 py-3">
                            <h2 className=" text-gray-700 py-2">Jahnvi Goyal | 27 December 2023</h2>
                            <h1 className="  text-xl py-3">Dish Magic: Empowering restaurant pa</h1>
                            <p className=" text-gray-800">Discover how we are leveraging PicNic (Picture Nicely) AI to make professional-quality food pictures accessible to our restaurant partners, with an aim for them to achieve higher orders and greater revenues.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Blogs