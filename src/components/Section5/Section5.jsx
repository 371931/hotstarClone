import React from 'react';
import "./Section5.css";
import Sec5img from "../../assets/images/Imagesec5.png"
import Button from '@mui/material/Button';

export default function Section5() {
  return (
    <section className="section5">
      <img src={Sec5img}/>
      <div className="detailsec5">
        <p>Get your favorite stories, originals and live sports with Disney+, Hulu, and ESPN+</p>
        <Button variant="contained" style={{width:"100%",fontSize: "18px",lineHeight:"18px",
      fontWeight:"500",letterSpacing:"1px"}}>GET ALL THREE</Button>
        <p>Terms Apply.</p>
      </div>
    </section>
  )
}
