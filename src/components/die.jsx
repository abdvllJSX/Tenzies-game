import React from "react";
import "../styles/die.scss"
export default function Dice(props){
    return(
        <>
        <div className="die-face">
            <h1 className="die-num">{props.value}</h1>
        </div>
        </>
    )
}