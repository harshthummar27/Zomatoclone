import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddAllCollection, AddCollection } from "../../../features/Slices/CollectionSlice";
import CollectionCard from "./CollectionCard";
import { FaCaretRight } from "react-icons/fa";

function Collection() {
    const dispatch = useDispatch();
    const[Allcollectiones, setAllcollectiones] = useState([]);

    const [showCollection,setShowCollection] = useState(false);

    const { collectiones } = useSelector((state) => state.Collection);
    useEffect(() => {
        dispatch(AddCollection());
        // setAllcollectiones(collectiones);
    }, []);
    // console.log(Allcollectiones);
    // console.log(collectiones);
    function AllCollectionRender()
    {
        dispatch(AddAllCollection());
        setShowCollection(true);
    }

    return (
        <div className="w-[1100px] mx-auto mt-10">
            <div>
                <h1 className=" text-start text-4xl">Collections</h1>
                <div className="flex items-center justify-between mb-7 mt-2">
                <p className="text-start text-xl font-light   text-black ">Explore curated lists of top restaurants, cafes, pubs, and bars in Ahmedabad, based on trends  </p>
                {!showCollection &&
                    <span className=" text-red-500 text-lg font-normal  flex items-center cursor-pointer" onClick={AllCollectionRender} >All collection in Ahmedabad<FaCaretRight/></span>
                }
                </div>
            </div>

            <div className="flex gap-4 flex-wrap">

                {
                    (collectiones.length > 0) ? (
                        collectiones.map((item) => (
                            <div key={item.id}>
                                <CollectionCard data={item} />
                            </div>
                        ))
                    ) : (
                        <div>
                            Collection not found
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Collection;