import React from "react";
import "./Section3.css";
import DoneIcon from '@mui/icons-material/Done';

export default function Section3() {
    return (
        <section className="section3">
            <h1>Choose Your Plan</h1>
            <p>Switch or cancel* anytime.</p>
            <div className="toggle">
                <div className="toggler">
                    <button>Disney Bundle</button>
                    <button>Disney+</button>
                </div>
            </div>
            <div className="cards">
                <div className="carded">
                    <div className="detailssec3">
                        <div className="logosec3"></div>
                        <div className="tecsec3">Duo Basic <div>With Ads</div></div>
                        <div className="planList">
                            <div className="itemsec3">
                                <DoneIcon /><div>Thousands of shows, movies, and Originals on Disney+ and Hulu</div>
                            </div>
                        </div>
                    </div>
                    <div className="findetails">
                        
                    </div>
                </div>
            </div>

            <p>*Effective at the end of the billing period. Terms apply.</p>
            <p>Terms apply</p>
        </section>
    );
}
