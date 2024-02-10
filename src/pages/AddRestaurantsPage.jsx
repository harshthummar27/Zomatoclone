import AddRestaurantsHeader from "../components/AddRestaurantsComp/AddRestaurantsHeader"
import HowWork from "../components/AddRestaurantsComp/HowWork"
import PartnerWithZomato from "../components/AddRestaurantsComp/PartnerWithZomato"
import RequirementForJoin from "../components/AddRestaurantsComp/RequirementForJoin"

function AddRestaurants()
{
    return(
        <div className="">
            <div className=" text-white w-[100%] bg-center h-[420px]  bg-no-repeat  bg-cover bg-[url('https://b.zmtcdn.com/mx-onboarding-hero87f77501659a5656cad54d98e72bf0d81627911821.webp')]">
                <AddRestaurantsHeader/>
                
            </div>
            <div>
            <RequirementForJoin/>
            </div>  
            <div>
                <PartnerWithZomato/>
            </div>
            <div>
                <HowWork/>
            </div>    
        </div>
    )
}
export default AddRestaurants