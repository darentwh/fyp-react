import * as React from 'react'
import Architecutre from "./architecture.png"
import './Architecture.css'

export default function Architecture(){
    return(
        <div className="architecture">
            <div className="mainWrapper">
                <img  src={Architecutre} alt="fireSpot"/>
            </div>
        </div>
    )
}