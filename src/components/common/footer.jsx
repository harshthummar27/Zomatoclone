import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function Footer() {

    return (
        <div className="bg-[#f8f8f8] py-10">

            <div className="flex flex-col bg-[#f8f8f8] w-[1100px] mx-auto border-b border-gray-500 pb-10">
                {/* footer header  */}
                <div className="flex justify-between ">
                    <div>
                        <img width={130} src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&amp;crop=198:42;*,*" alt="Zomato logo" className="sc-elhb8j-1 ixsoFB" />
                    </div>
                    <div className="flex gap-5">
                        <p>INDIA</p>
                        <p>ENGLISH</p>
                    </div>
                </div>

                {/* footer columns */}
                <div className="flex gap-28 mt-9">
                    <div className="flex flex-col gap-1 text-gray-600 text-start">
                        <h2 className=" font-semibold text-black pb-3">ABOUT ZOMATO</h2>
                        <a href="#">Who We Are</a>
                        <a href="#">Blog</a>
                        <a href="#">Work With Us</a>
                        <a href="#">Investor Relations</a>
                        <a href="#">Report Fraud</a>
                        <a href="#">Press Kit</a>
                        <a href="#">Contact Us</a>
                    </div>
                    <div className="flex flex-col gap-1 text-gray-600 text-start">
                        <h2 className=" font-semibold text-black">ZOMAVERSE</h2>
                        <a href="#">Zomato</a>
                        <a href="#">Blinkit</a>
                        <a href="#">Freeding india</a>
                        <a href="#">Hyperpure</a>
                        <a href="#">Zomaland</a>
                    </div>


                    <div className="flex flex-col gap-1 text-gray-600 text-start">
                        <div className="flex flex-col gap-1 text-gray-600">
                            <h2 className=" font-semibold text-black">FOR RESTAURANTS</h2>
                            <a href="#">Partner With Us</a>
                            <a href="#">Apps For You</a>
                        </div>
                        <div className="flex flex-col gap-1 text-gray-600 mt-6">
                            <h2 className=" font-semibold text-black">FOR ENTERPRISES</h2>
                            <a href="#">Zomato For Enterprise</a>
                        </div>
                    </div>


                    <div className="flex flex-col gap-1 text-gray-600 text-start">
                        <h2 className=" font-semibold text-black">LEARN MORE</h2>
                        <a href="#">Privacy</a>
                        <a href="#">Security</a>
                        <a href="#">Terms</a>
                        <a href="#">Sitemap</a>
                    </div>

                    <div className="flex flex-col gap-1 text-start">
                        <h2 className=" font-semibold text-black">SOCIAL LINKS</h2>
                        <div className="flex gap-2 pt-2 pb-4  text-xl ">
                            <FaLinkedin />
                            <FaSquareInstagram />
                            <FaTwitterSquare />
                            <FaYoutube />
                            <FaFacebook />
                        </div>
                        <div className="flex flex-col gap-3">
                            <img alt="image" width={140} src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" loading="lazy" className="sc-s1isp7-5 fyZwWD" />
                            <img alt="image" width={140} src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" loading="lazy" className="sc-s1isp7-5 fyZwWD"></img>
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-[1100px] mx-auto  text-starts text-sm text-gray-600 mt-6">
                <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-</p>
                <p className=" text-start pl-1">2024 © Zomato™ Ltd. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;