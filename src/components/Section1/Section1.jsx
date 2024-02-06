import React from "react";
import "./Section.css";
import Label1 from "./Label/Label1";
import LabelImg1 from "../../assets/images/ImagelabelPho1.png";
import LabelImg2 from "../../assets/images/Imagebg2.png"
import BrandLogoImg from "../../assets/images/Brand Logosbranglogo.png" 

export default function Section1() {
    return (
        <section className="section1">
            <nav>
                <button>LOG IN</button>
            </nav>
            <div className="sec1con">
                <div className="centerSec1">
                    <Label1 src={LabelImg2} content="GET THEM BOTH"/>
                    <Label1 src={LabelImg1} content="GET ALL THREE"/>
                </div>
                <p>All of these and more now streaming.</p>
                <p className="p2">The Disney Bundle Duo Basic includes Disney+ (With Ads) and Hulu (With Ads). Terms Apply.</p>
                <img src={BrandLogoImg} alt="" className="branlogos"/>
                <p className="endind">View All Plan Options</p>
            </div>
        </section>
    )
}