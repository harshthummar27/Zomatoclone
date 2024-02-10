import { Link } from "react-router-dom";
import AuthenticateUser from "../common/AuthenticateUser";
import { FaCartShopping } from "react-icons/fa6";

function HomeNav() {
    return (
        <nav className="text-white flex w-[80%] mx-auto items-center justify-between text-xl pt-5">
            <div className="logo-section">
                <a href="#" className=" text-base">Get the App</a>
            </div>
            <div className="flex gap-5 items-center ">
                <Link to={'/investor-relations'}><div>Investor Relations</div></Link>
                <Link to={'partner-with-us'}><div>Add resaurant</div></Link>
                <AuthenticateUser />
                <Link to={'/cart'}>
                    <div className=" text-2xl mt-4 p-3 bg-slate-900 rounded-full">
                        <FaCartShopping />
                    </div>
                </Link>
            </div>
        </nav>
    )

}

export default HomeNav;