import { useEffect, useState } from "react";
import { TopBrands } from "../../Data/TopBrands";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function Topbrand() {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        setBrands(TopBrands);
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className="max-w-[1100px] mx-auto  gap-2 ">
            <h1 className=" font-semibold text-3xl text-start py-8 text-gray-800">Top brands for you</h1>
            <div className=" mt-5 mb-10">
                {
                    (brands.length > 0) ? (
                        <Slider {...settings}>
                            {
                                brands.map((brand) => (

                                    <Link key={brand.id} to={`/Ahmedabad/order-food-online/${brand.name.replaceAll(" ", "-")}/order`}>
                                        <div  className=" flex flex-col  justify-center items-center gap-2 max-w-[180px] ">
                                            <div className=" w-[166px]">
                                                <img className=" rounded-full w-[150px] h-[150px]" src={brand.image} width={150} />
                                            </div>
                                            <p className=" font-semibold text-lg text-gray-600">{brand.name}</p>
                                            <p className=" font-semibold text-xs text-gray-500">{brand.DeliveryTime} min</p>
                                        </div>
                                    </Link>
                                ))
                            }
                        </Slider>
                    ) : (
                        <div>
                            brand not found
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Topbrand;


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#ff6666" , borderRadius:"100%", color:"white", paddingTop:"10px", paddingBottom:"8px", paddingInline:"9px",border:"4px solid #ff6666", display:"flex", alignItems:"center",justifyContent:"center"}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#ff6666" , borderRadius:"100%", color:"white", paddingTop:"10px", paddingBottom:"8px", paddingInline:"9px",border:"4px solid #ff6666", display:"flex", alignItems:"center",justifyContent:"center"}}
            onClick={onClick}
        />
    );
}