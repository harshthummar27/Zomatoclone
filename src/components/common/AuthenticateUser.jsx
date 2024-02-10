import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { FaUserCircle } from "react-icons/fa";
import toast from "react-hot-toast";

function AuthenticateUser() {
    const [isuser, setIsuser] = useState(false);
    const [showLoginModal,setShowLoginModal] = useState(false);
    const [showSingupModal, setShowSingupModal] = useState(false);
    return (
        <div>
            <div  >
                {!isuser &&
                    <div className="flex gap-5">
                        <div className=" cursor-pointer" onClick={()=>setShowLoginModal(true)}>Log in</div>
                        <div className=" cursor-pointer" onClick={()=>setShowSingupModal(true)}>Sign up</div>
                    </div>
                }

                {isuser &&
                    <div className="flex items-center gap-3 relative bottom-2">
                        <p className="border-2 cursor-pointer rounded-full text-5xl text-blue-50"><FaUserCircle /></p>
                        <p className="  font-semibold border pt-1 pb-2 px-2 rounded-lg cursor-pointer" onClick={()=>{setIsuser(false); toast.success("Logout Successfully")} }>Logout</p>
                    </div>
                }
            </div>
            <div>
            {
            showLoginModal &&
            <Login setloginModal = {setShowLoginModal} setIsuser={setIsuser} />
            }
            {
                showSingupModal &&
                <Signup setSignupModal = {setShowSingupModal} setIsuser={setIsuser}/>
            }

         </div>
           
        </div>
    )
}

export default AuthenticateUser;