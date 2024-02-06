import React from "react";
import Button from '@mui/material/Button';
import "./Label1.css";

export default function Label1(props) {
    return (
        <div className="label1">
            <img src={props.src} alt=""></img>
            <Button style={{fontSize:"18px",width:"300px",height:"70px"}} variant="contained">{props.content}</Button>
        </div>
    );
}