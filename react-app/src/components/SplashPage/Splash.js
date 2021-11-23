import React from "react";
import NavBar from "../NavBar/NavBar"
import './splash.css'

export default function Splash() {
    return (
        <>
            <div className="splashPicContainer">
                <img
                    className="splashPic"
                    src="https://res.cloudinary.com/dqwy6sxtc/image/upload/v1637358162/mom-and-pops/welcome-pampa_far2uf.png"
                    alt="Splash Page"
                />
                <div className="imageOverlay"></div>
                <div className="splashText">
                    <h1 className="splashTitle">
                        <span className="splashSpan">Mom and Pops</span>{" "}
                        A place for the people of Pampa!
                    </h1>
                </div>
            </div>
        </>
    );
}
