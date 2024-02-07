import React, { useEffect, useState } from 'react';
import "./CardSec3.css";
import Button from '@mui/material/Button';
import Listitem from './ListItems/Listitem';

export default function CardSec3(props) {

    return (
        <div className="carded">
            <div className="details3">
                <img src={props.labelPhoto} className={props.classname}/>
                <div className="tecsec3">{props.subhead}<div>{props.adds}</div></div>
                <div className="planList">
                    {props.lcontent && props.lcontent.map((val,i)=> <Listitem key={i} content={val} />)}
                </div>
                <div className="findetails">
                    <div className="price"><span>{props.price}</span>/month</div>
                    <Button variant="contained" style={{fontSize:"18px",fontWeight:"500"}}>SELECT</Button>
                </div>
            </div>
        </div>
    )
}
