import React from "react";
import "./Section2.css";
import img1 from "../../assets/images/Black Panther - Wakanda Foreverimg1.png";
import img2 from "../../assets/images/Andorimg2.png";
import img3 from "../../assets/images/Turning Redimg3.png";
import img4 from "../../assets/images/Fire of Loveimg4.png";
import img5 from "../../assets/images/Encantoimg5.png";
import img6 from "../../assets/images/Zootopia+img6.png";

export default function Section2() {

    return (
        <section className="section2">
            <nav className="navsec2">
                <ul>
                    <li>TRENDING</li>
                    <li>NEW ON DISNEY+</li>
                    <li>COMING SOON</li>
                </ul>
            </nav>
            <div className="gridConsec2">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
            </div>
        </section>
    );
}