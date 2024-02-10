import { useEffect, useState } from "react";
import DeliveryRes from "../../Data/DeliveryData";
import { DiningData, } from "../../Data/DiningData";
import { collection } from "../../Data/collection";
import { IoMdClose } from "react-icons/io";

function SearchHome({ query }) {
    const DeliveryData = DeliveryRes;
    const DiningDataes = DiningData;
    const CollectionData = collection;
    const ProductList = [...DeliveryData, ...DiningDataes, ...CollectionData];
    const [showSearchContainer, setShowSearchContainer] = useState(true);

    // console.log(ProductList);

    const [products, setProducts] = useState([]);
    const [searchquery, setSearchQuery] = useState('');

    function searchandlar() {
        if (query === "") {
            return;
        }
        else {
            const filterBySearch = ProductList.filter((item) => {
                // console.log(item.name);
                // console.log(searchquery);
                if (item.name.toLowerCase().includes(searchquery.toLowerCase())) {
                    return item;
                }
            })
            setProducts(filterBySearch);
        }
    }
    useEffect(() => {
        setSearchQuery(query);
        searchandlar();
        if (query.length <= 1) {
            setShowSearchContainer(false);
        }
        else{
            setShowSearchContainer(true);
        }
    }, [query]);
    // console.log("Item is", products);
    return (

        <div className="">
            {
                showSearchContainer &&
                <div>
                    {products.length &&
                        <div className="h-[500px] py-6 rounded-lg w-[500px] overflow-scroll absolute  z-20 top-[330px] left-[650px] bg-white">
                            <div onClick={()=>setShowSearchContainer(false)}  className="  cursor-pointer absolute right-4 text-3xl bg-slate-50 p-1 rounded-xl top-2 "><IoMdClose /></div>
                            {
                                products.map((item, index) => (

                                    <div className="flex gap-5 mt-4 item-center pl-3 " key={index}>
                                        <div>
                                            <img className=" rounded-md" src={item.image} alt="" width={72} height={72} />
                                        </div>
                                        <div className=" text-start  ">
                                            <p>{item.name}</p>
                                            <p>{item.location}</p>
                                        </div>
                                    </div>

                                ))
                            }
                        </div>
                    }
                </div>
            }
        </div>
    )

}
export default SearchHome;