import { FaCircleCheck } from "react-icons/fa6";
function RequirementForJoin()
{
    return(
        <>
        <div className="w-[100%] bg-zinc-100 py-3">
        <div className="relative top-[-50px] flex flex-col w-[720px] text-start mx-auto bg-white rounded-xl py-10">
            <div className=" text-center">
                <p className=" text-3xl font-semibold pb-3 ">Get started with online ordering</p>
                <p className=" pb-6">Please keep the documents ready for a smooth signup</p>
            </div>
            <div className="flex justify-around py-4">
                <div className="flex gap-5 flex-col">
                    <p className="flex gap-2 items-center text-lg"><span className="text-green-600"><FaCircleCheck /></span> FSSAI license copy <span>(apply now)</span></p>
                    <p className="flex gap-2 items-center text-lg"><span className="text-green-600"><FaCircleCheck /></span> Regular GSTIN (if applicable)</p>
                    <p className="flex gap-2 items-center text-lg"><span className="text-green-600"><FaCircleCheck /></span> Your restaurant menu</p>
                </div>
                <div  className="flex gap-5 flex-col">
                    <p className="flex gap-2 items-center text-lg"><span className="text-green-600"><FaCircleCheck /></span> PAN card copy</p>
                    <p className="flex gap-2 items-center text-lg"><span className="text-green-600"><FaCircleCheck /></span> Bank account details</p>
                    <p className="flex gap-2 items-center text-lg"><span className="text-green-600"><FaCircleCheck /></span> Dish images for top 5 items</p>
                </div>
            </div>
        </div>
        </div>
        </>
    )

}

export default RequirementForJoin;