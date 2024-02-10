import Business from "../components/InverstorRelationComp/Business";
import InverstorRelationHeader from "../components/InverstorRelationComp/InverstorRelationHeader";
import Offerings from "../components/InverstorRelationComp/Offerings";
import Blogs from "../components/InverstorRelationComp/Blogs";
import Contactme from "../components/InverstorRelationComp/Contactme";

function Inverstorrelation() {
    return (
        <div>
            <div>
                <InverstorRelationHeader />
            </div>
            <div className=" bg-[#f8f8f8]">
                <div>
                    <Offerings />
                </div>
                <div>
                    <Business />
                </div>
                <div>
                    <Blogs/>
                </div>
                <div className=" bg-white">
                    <Contactme/>
                </div>
            </div>

        </div>
    )

}

export default Inverstorrelation;

