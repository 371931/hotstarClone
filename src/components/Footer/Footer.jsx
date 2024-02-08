import React from 'react';
import "./Footer.css";
import Footimg1 from "../../assets/images/Logofooterlogo.png";
import LanguageIcon from '@mui/icons-material/Language';

export default function Footer() {
  return (
    <footer>
        <img src={Footimg1} />
        <div className="foot1 foot">
            <div className="languages"><LanguageIcon style={{color:"#C0C0C0",position:"absolute"}} fontSize="small" />
            <select name="language" id="">
                <option value="English">English</option>
                <option value="Tamil">Tamil</option>
                <option value="Hindi">Hindi</option>
            </select>
            </div>
            <p className="Subscriber">
            Subscriber Agreement
            </p>
            <p>Privacy Policy</p>
            <p>Your California Privacy Rights</p>
            <p>Do Not Sell My Personal Information</p>
            <p>Children's Online Privacy Policy</p>
        </div>

        <div className="foot2 foot">
            <p>Closed Captioning</p>
            <p>Interest-Based Ads</p>
            <p>Supported Devices</p>
            <p>Help</p>
            <p>Gift Disney+</p>
            <p>About Us</p>
            <p>Disney+ Partner Program</p>
            <p>Disney Bundle</p>
        </div>

        <div className="foot3 foot"><div>Content and platform availability may vary by region.</div> <div>© Disney. All Rights Reserved.</div></div>

    </footer>
  )
}
