import React, { useState, useEffect } from "react";
import "./screens.styles.css";

export default function MainScreen(props) {
    return(
        <div>
            <p className="title">
                Kanyes Thaker
            </p>
            <p className="text-block">
                <b>Currently</b><br/>ML Eng @ <a href="https://snorkel.ai">snorkel.ai</a>
            </p>
            <p className="text-block">
                <b>Previously</b><br/>
                CS/Math @ Cal '21<br/>
                Cofounder @ Iris<br/>
                Quant intern @ GS and Point72<br/>
                Ex-pres @ <a href="https://mdb.dev">mdb.dev</a>
            </p>
            <p className = "text-block">
                Contact me to talk about math, hard tech, art, social justice, music, and how to build the future
            </p>
            <p className = "text-block">
                kanyes[dot]thaker[at]gmail<br/>
                <a href="https://linkedin.com/in/kanyesthaker" style={{"text-decoration":"none"}}>/in/kanyesthaker</a>
            </p>
        </div>
    )
}
