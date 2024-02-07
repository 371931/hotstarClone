import React,{useState} from "react";
import "./Section3.css";
import CardSec3 from "./CardSec3/CardSec3"; 
import LabelImg1 from "../../assets/images/ImagelabelPho1.png";
import LabelImg2 from "../../assets/images/Imagebg2.png";

export default function Section3() {

    const [btnClass,upBtnClass] = useState(false);

    function onCli(){
        upBtnClass(btnClass ? false : true);
    }

    return (
        <section className="section3">
            <p className="headSec3">Choose Your Plan</p>
            <p>Switch or cancel* anytime.</p>
            <div className="toggle">
                <button onClick={onCli} className={!btnClass && "toggi"}>Disney Bundle</button>
                <button onClick={onCli} className={btnClass && "toggi"}>Disney+</button>
            </div>
            <div className="cards">
                <CardSec3 labelPhoto={LabelImg2} classname="imgSiz" lcontent={["Thousands of shows, movies, and Originals on Disney+ and Hulu"]} price="$9.99" subhead="Duo Basic" adds="With Ads"/>
                <CardSec3 labelPhoto={LabelImg1} lcontent={["Thousands of shows, movies, and Originals on Disney+ and Hulu","Live sports and Originals on ESPN+"]} price="$12.99" subhead="Trio Basic" adds="With Ads"/>
                <CardSec3 labelPhoto={LabelImg1} lcontent={["Thousands of shows, movies, and Originals on Disney+ and Hulu","Live sports and Originals on ESPN+","Downloads to watch on-the-go"]} price="$19.99" subhead="Trio Premium" adds="No Ads on Disney+ & Hulu"/>
            </div>

            <p className="p1sec3">*Effective at the end of the billing period. Terms apply.</p>
            <p className="p2sec3">Terms apply</p>
        </section>
    );
}
