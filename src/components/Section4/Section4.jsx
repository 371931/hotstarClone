import React from 'react';
import "./Section4.css";
import Sec4img from "../../assets/images/Image.png";

export default function Section4() {
  return (
    <section className='section4'>
      <div className="gridsec4">
        <img src={Sec4img}/>
        <div className="contentSec4">
          <p>Watch the way you want</p>
          <ul className="listSec4">
            <li>Host virtual movie nights with GroupWatch. Pause, rewind, and react with up to six friends. To invite or be invited to join GroupWatch, subscription is required.</li>
            <li>Download any movie or series and watch it on the go.</li>
            <li>Keep your family safe with easy parental controls.</li>
            <li>An ever-growing range of titles in stunning 4K UHD and Dolby Atmos sound on compatible devices.</li>
            <li>Stream on up to four devices at the same time.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
