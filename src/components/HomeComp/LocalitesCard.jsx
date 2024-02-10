import { FaChevronRight } from "react-icons/fa6";
function LocalitesCard({location})
{
    return(
        <div className=" cursor-pointer w-[356px] flex items-center justify-between border gap-2 rounded-md py-3 px-4  hover:shadow-md hover:shadow-gray-150  transition-all duration-200">
            <div className="flex flex-col gap-1 items-start">
                <p className=" text-xl text-gray-800">{location.name}</p>
                <p className=" text-md font-light text-gray-950 ">{location.places} places</p>
            </div>
            <div>
                <FaChevronRight className=" text-xs font-light text-gray-500"/>
            </div>
        </div>
    )
}
export default LocalitesCard