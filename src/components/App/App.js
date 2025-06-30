import React from "react";
import Navbar from "../Navbar/navbar";
import PicnicZones from "../PicnicZones/PicnicZones";
import Bonuses from "../Bonuses/bonuses";
import EcoEducation from "../EcoEducation/EcoEducation";
import Footer from "../Footer/footer";

function App() {
    return (
        <div className="font-sans bg-gray-50 text-gray-800">
            <Navbar/>
            <PicnicZones />
            <Bonuses />
            <EcoEducation />
            <Footer />
        </div>
    );
}

export default App;
