import AuthenticateUser from "../common/AuthenticateUser";

function AddRestaurantsHeader()
{
    return(
        <div>
            <nav className=" flex justify-evenly pt-4">
            <div>
               <img src="https://b.zmtcdn.com/web/merchant/advertize/3d432595dac7d2bda0b4cc41f6afe6ef1564646824.png" alt="" width={121} /> 
            </div>  
            <div className="flex gap-4">
                <p>Advertise</p>
                <AuthenticateUser/>
            </div>
            </nav>
            <div className=" w-[600px] mx-auto text-start">
            <p className=" text-3xl font-semibold pt-8 ">Partner with Zomatoat <br /> 0% commission for the 1st month!</p>
            <p className=" text-lg py-4">And get ads worth INR 1500. Valid for new restaurant partners in select cities.</p>
            <div className=" flex gap-5">
                <div className="px-8 rounded-lg py-3 bg-blue-500">Register your Restauant</div>
                <div className=" bg-white rounded-lg text-black py-3 px-4">Login to view your existing restaurants</div>
            </div>
            <div className="pt-3">Need help ? Please email us at merchantonboarding@zomato.com</div>
            </div>
        </div>
    )
}

export default AddRestaurantsHeader;