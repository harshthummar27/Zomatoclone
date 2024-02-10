import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function CollectionCard({data})
{

    return(
        <Link to={`/Ahmedabad/${data?.name.replaceAll(" ","-")}`}>
        <div>
            <div className=" w-[260px]  h-[290px] relative collection-card hover:translate-y-1 transition-all duration-200 " >
                <img src={data.image} width={260} className=" h-full rounded-md"  alt="image not found"/>
                <p className=" absolute bottom-8 font-semibold text-lg text-white left-2">{data.name}</p>
                <p className=" absolute bottom-2 left-2 text-white flex items-center justify-center">{data.places} Places <FaCaretRight/></p>
                
            </div>
        </div>
        </Link>
    )
}
export default CollectionCard;