import { useState } from "react";

function GetAppAD() {
    const [isEmail, setIsEmail] = useState(true);

    return (
        <div className="w-full bg-[#fffbf7]  mt-24 py-16">
            <div className="flex w-[1100px] gap-10 items-center mx-auto justify-center">
                <div>
                    <img src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png" width={250} height={450} />
                </div>


                <div className="flex flex-col items-start gap-4 ">
                    <h1 className="text-5xl font-semibold">Get the Zomato app</h1>
                    <p className=" text-lg font-light">We will send you a link, open it on your phone to download  the app</p>
                    <div className="flex gap-3">


                            <div className="cursor-pointer">
                               
                                <label className="text-lg flex items-center ">
                                    <input type="radio" id="send" name="sendmessage" className="mr-1 h-4 w-4 "   onChange={() => setIsEmail(true)} checked = {isEmail} />
                                    Email
                                </label>
                            </div>
                        


                        <div className="cursor-pointer">
                            <label className="text-lg flex items-center">
                                <input type="radio" id="send" name="sendmessage" className="mr-1 h-4 w-4 " onChange={() => setIsEmail(false)} />
                                Phone
                            </label>
                        </div>
                      
                    </div>
                      

                    <div>
                    {
                             isEmail &&
                        <input type="email" className="py-3 w-[300px] px-4 border rounded-md " placeholder="Email" />
                    }
                    {
                        !isEmail &&
                        <input type="phone" className="py-3 w-[300px] px-4 border rounded-md " placeholder="Phone Number" />
                    }
                        <button className=" bg-red-500 py-3 ml-2 hover:bg-red-600 transition-all duration-300 text-white px-3 rounded-md" >Share App Link</button>
                   
                    </div>
                    <p className=" text-gray-400">Download app from</p>
                    <div className="flex gap-3">
                        <img alt="image" width={140} src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" loading="lazy" className="sc-s1isp7-5 fyZwWD" />
                        <img alt="image" width={140} src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" loading="lazy"  className="sc-s1isp7-5 fyZwWD"/>
                    </div>


                </div>
            </div>
        </div>
    )

}

export default GetAppAD;