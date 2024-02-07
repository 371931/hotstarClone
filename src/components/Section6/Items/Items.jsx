import React from 'react';
import "./items.css";

export default function Items(props) {

    return (
        <div className="items">
            <img src={props.src} alt="" />
            <p className="heading">{props.heading}</p>
            <ul>
                {props.listContent && props.listContent.map((val)=>{
                return <li>{val}</li>})}
            </ul>
        </div>
    )
}
