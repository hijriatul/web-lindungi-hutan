import React from "react";
import Apps from "../../component/app"
import Cards from "../../component/card";
import Cardd from "../../component/card1";
import Navigation from "../../component/navigation";

function Home(){
    return(
        <div className="App">
            <Apps />
            <Cards />
            <Cardd />
            <Navigation />
        </div>
    );
}

export default Home;