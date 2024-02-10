function Contactme()
{
    return(
        <div className=" py-10 flex w-[1100px] mx-auto  gap-10 justify-around">
            <div  className=" text-start flex flex-col gap-3">
                <h1 className=" text-3xl  font-bold">Subscribe to our email alerts</h1>
                <p className=" text-xl">Get regular updates through email.</p>
                <input className=" border rounded-xl border-gray-600 py-3 px-1 placeholder:text-xl pl-3 text-gray-900 outline-none" placeholder="Email" type="email" name="" id="" />
                <p className=" py-2 px-3 bg-red-500 rounded-lg w-max text-white ">Subscribe</p>
            </div>
            <div className="flex flex-col gap-4 text-start">
                <h1 className=" font-bold text-3xl">Have questions?</h1>
                <p className=" text-lg ">Reach out to us by emailing at <span className=" text-red-500">shareholders@zomato.com</span> , and we’ll <br />get back to you.</p>
                <p className=" py-2 px-3 my-3 bg-red-500 rounded-lg w-max text-white ">Contact us</p>
            </div>
        </div>
    )
}

export default Contactme