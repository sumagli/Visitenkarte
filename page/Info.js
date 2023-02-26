import React from "react"
import ReactDOM from "react-dom"

export default function Info(){
    
    return(
        <div className="Info">
            <img src = "././Images/PB.jpg" href="https://www.freecodecamp.org/"/>
            <h1>Max Musterman</h1>
            <h2>Frontend Developer</h2>
            <p>laurasmith.website</p>
            <div className = "Links1">
                <div className="Email">
                    <img src = "././Images/Icon.png" />
                    <h3>Email</h3>
                </div>
                <div className="LinkedIn">
                    <img src = "././Images/LinkedinIcon.png" />
                    <h3>LinkedIn</h3>
                </div>    
            </div>
        </div>
    )
    
}