import React from "react"
import ReactDOM from "react-dom"
import About from "./page/About.js"
import Footer from "./page/Footer.js"
import Info from "./page/Info.js"
import Interests from "./page/Interests.js"

export default function App(){
    return(
        <div className="lost">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}