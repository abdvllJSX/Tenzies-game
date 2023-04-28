import React from "react";
import "../styles/die.scss"
export default function Dice(props){
    return(
        <>
        <div className="die-face" 
        style={props.isHeld ? {backgroundColor: "#59E391"} : {backgroundColor: "#ffffff"}}
        onClick={props.handleHoldDice}
        >
            <h1 className="die-num">{props.value}</h1>
        </div>
        </>
    )
}