import React from "react";

function PicnicZones() {
    return (
        <section id="zones" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-5 fw-bold text-success">Piknik zonalari</h2>

                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card shadow-sm h-100">
                            <img src="https://gdb.voanews.com/b302ced3-52a0-4c95-b7ee-5508c33ab98c_cx1_cy4_cw98_w1080_h608.png" className="card-img-top" alt="So‘x vodiysi" />
                            <div className="card-body">
                                <h5 className="card-title">So‘x vodiysi</h5>
                                <p className="card-text">Farg‘ona viloyatida joylashgan, tog‘lar bagrida ajoyib dam olish maskani.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow-sm h-100">
                            <img src="https://centralasia-adventures.com/image/new/charvak.html-n.jpg" className="card-img-top" alt="Charvak" />
                            <div className="card-body">
                                <h5 className="card-title">Charvak</h5>
                                <p className="card-text">Toshkent viloyatidagi mashhur suv ombori va piknik joyi.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow-sm h-100">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Ulugh-Beg_madrasah_in_Gijduvan_13-45.JPG" className="card-img-top" alt="G‘ijduvon" />
                            <div className="card-body">
                                <h5 className="card-title">G‘ijduvon</h5>
                                <p className="card-text">Buxoro viloyatidagi sokin va tabiiy go‘shalar bilan mashhur joy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PicnicZones;
