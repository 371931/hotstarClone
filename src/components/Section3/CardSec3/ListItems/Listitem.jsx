import React from 'react';
import "./ListItem.css";
import DoneIcon from '@mui/icons-material/Done';

export default function Listitem(props) {
    return (
        <div className="items3">
            <DoneIcon /><div>{props.content}</div>
        </div>
    )
}
