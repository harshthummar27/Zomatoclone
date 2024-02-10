import { useState } from "react";
import { Accordain } from "../../Data/ExploreOptionAccordian";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";

export default function Accordian() {
    const data = Accordain;
    const [isquestion, setIsquestion] = useState(null);


    function questionClickHandler(QueId) {
        setIsquestion((prev) => (QueId === prev)?(null):(QueId));
    }

    return (
        <div className=" bg-[#fcfcfc] py-16">
        <div className=" w-[1100px] mx-auto">
            <h1 className=" text-3xl font-semibold text-start mb-6">Explore options near me</h1>
            <div>
                {
                    (data.length > 0) ? (
                        <div className="flex flex-col gap-4 bg-white">
                            {

                                data.map((item) => (
                                    <div key={item.id} className="border-2  rounded-lg">
                                        <div className=" flex justify-between items-center   px-5 py-5 cursor-pointer " onClick={() => questionClickHandler(item.id)}>
                                            <p className=" text-xl">{item.question}</p>
                                            <span>
                                                {
                                                    isquestion === item.id &&
                                                    <FaAngleDown/>
                                                }
                                                {
                                                    isquestion !== item.id &&
                                                    <IoIosArrowUp/>
                                                }
                                            </span>
                                        </div>

                                        {
                                            isquestion === item.id &&
                                            
                                            <div>
                                                <p className=" text-start px-5 text-lg text-gray-500 py-2">{item.answer}</p>
                                            </div>
                                        }

                                    </div>
                                ))

                            }
                        </div>
                    ) : (<div>Data not found </div>)
                }
            </div>
        </div>
        </div>
    )
}
