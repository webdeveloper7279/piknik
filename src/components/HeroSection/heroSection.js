import React from "react";


function HeroSection() {
    return (
        <section className="bg-[url('/picnic-hero.jpg')] bg-cover bg-center h-[90vh] flex items-center justify-center" id="home">
            <div className="text-center bg-black bg-opacity-50 p-10 rounded-xl">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Tabiatda dam olishga tayyormisiz?</h2>
                <p className="text-white text-lg md:text-xl">Eng yaxshi piknik zonalarni biz bilan toping!</p>
            </div>
        </section>
    );
}

export default HeroSection;
