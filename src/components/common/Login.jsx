import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login({ setloginModal,setIsuser }) {

    const [loginInfo, setLoginInfo] = useState({
        phoneNumber: '',
    })

    const navigate = useNavigate();

    function LoginInfoHandler(event) {
        setLoginInfo((prev) => {
            const { name, value } = event.target;
            // console.log(name,value);
            return {
                ...prev,
                [name]: value
            }
        })
        // console.log(loginInfo.phoneNumber);
    }

    function loginBtnHandler() {
        if(loginInfo.phoneNumber.length === 10)
        {
            toast.success("Login successfuliy");
            setloginModal(false);
            setIsuser(true);
            console.log(loginInfo);
        }
        else
        {
            toast.error(" enter valid phone number")
            setLoginInfo((prev)=>{
                return{
                    ...prev,
                    phoneNumber:''
                }
            }
            )
        }
    }


    return (
        <div>
            <div className="fixed z-50 inset-0 overflow-y-auto w-[450px] mx-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-zinc-950  opacity-95"></div>
                    </div>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>


                    <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
                        role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        <div className="flex justify-between text-black ">
                            <div>
                                <div className=" text-3xl">Login</div>
                            </div>
                            <button onClick={() => setloginModal(false)} type="button" data-behavior="cancel" className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                <div className=" text-3xl text-black">
                                    <IoCloseSharp />
                                </div>
                            </button>
                        </div>

                        <div className=" text-black">
                            <div className=" flex mt-8 mb-4  border-2 rounded-lg px-3 gap-2 text-black text-base  items-center ">
                                <span className=" w-8"><img src="https://b.zmtcdn.com/images/flags_z10/in.png?output-format=webp"></img>
                                </span>+91<input className=" w-full border-none outline-none  py-3" type="text" name="phoneNumber" onChange={LoginInfoHandler} value={loginInfo.phoneNumber || ""} id="" placeholder="Phone" />
                            </div>
                            <div className=" bg-red-500 text-white hover:bg-red-600 w-full py-3 px-3 text-center text-lg rounded-md">
                                <button onClick={loginBtnHandler}>Send One Time Password</button>
                            </div>
                            <div className="flex mt-2 mb-4 text-black items-center gap-1 justify-center ">
                                <div className=" bg-slate-300 h-[1px] w-full mt-1"></div>
                                or
                                <div className="bg-slate-300 h-[1px] w-full mt-1"></div>
                            </div>
                            <div className=" my-2 w-full flex py-2 px-2 items-center border-2 rounded-lg justify-center gap-4">
                                <p className=" text-3xl text-red-500"><MdEmail /></p> <p className=" text-gray-800 text-lg">Continue With Email</p>
                            </div>
                            <div className=" my-5 w-full flex py-2 px-2 items-center border-2 rounded-lg justify-center gap-4">
                                <p className=" pl-4 text-3xl text-red-500"><svg width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.87566 13.2946L4.10987 16.1534L1.31093 16.2126C0.474461 14.6611 0 12.886 0 10.9997C0 9.17565 0.443609 7.45552 1.22994 5.94092H1.23054L3.72238 6.39776L4.81396 8.87465C4.5855 9.54071 4.46097 10.2557 4.46097 10.9997C4.46106 11.8072 4.60732 12.5808 4.87566 13.2946Z" fill="#FBBB00"></path><path d="M21.8082 8.94507C21.9345 9.61048 22.0004 10.2977 22.0004 11C22.0004 11.7875 21.9176 12.5557 21.7598 13.2967C21.2243 15.8183 19.8252 18.0201 17.8869 19.5782L17.8863 19.5776L14.7477 19.4175L14.3035 16.6445C15.5896 15.8902 16.5947 14.7098 17.1242 13.2967H11.2422V8.94507H17.21H21.8082Z" fill="#518EF8"></path><path d="M17.8865 19.5778L17.8871 19.5784C16.002 21.0937 13.6073 22.0002 11.0006 22.0002C6.81152 22.0002 3.16945 19.6588 1.31152 16.2132L4.87625 13.2952C5.8052 15.7744 8.19679 17.5392 11.0006 17.5392C12.2057 17.5392 13.3348 17.2134 14.3036 16.6447L17.8865 19.5778Z" fill="#28B446"></path><path d="M18.0208 2.53241L14.4573 5.44981C13.4546 4.82307 12.2694 4.46102 10.9996 4.46102C8.13229 4.46102 5.69596 6.30682 4.81356 8.87494L1.23009 5.9412H1.22949C3.06022 2.41154 6.74823 0 10.9996 0C13.6686 0 16.1158 0.950726 18.0208 2.53241Z" fill="#F14336"></path></svg></p> <p className=" text-gray-800 text-lg">Continue With Google</p>
                            </div>
                            <div className=" bg-slate-300 h-[1px] w-full my-3"></div>
                            <div className=" flex  text-lg gap-2">
                                <p className=" text-gray-800">New to Zomato?</p><p className=" text-red-400">Create account</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Login;