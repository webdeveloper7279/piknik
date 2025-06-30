import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success sticky-top shadow">
            <div className="container">
                <a className="navbar-brand fw-bold" href="#">EcoPicnic</a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#zones">Piknik zonalari</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#bonuses">Bonuslar</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#eco">Ekologik ta’lim</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
