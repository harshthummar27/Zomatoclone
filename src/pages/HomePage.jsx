import React from "react";
import HomeHeader from '../components/Headers/HomeHeader'
import Collection from '../components/HomeComp/collection/Collection';
import Localites from '../components/HomeComp/Localites';
import GetAppAD from '../components/HomeComp/GetAppAD';
import Accordian from "../components/HomeComp/Accordian";
import DiningAndDineOutCard from "../components/HomeComp/Dining&DineoutCard";
import SearchHome from "../components/HomeComp/SearchHome";

function HomePage() {
    return (
        <div>
            <HomeHeader />
            <DiningAndDineOutCard/>
            <Collection />
            <Localites />
            <GetAppAD />
            <Accordian/>
        </div>

    )

}

export default HomePage;