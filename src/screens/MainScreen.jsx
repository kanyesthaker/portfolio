import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./screens.module.css";
import KanyesImage from "../kanyes.svg";

export default function MainScreen(props) {
    return(
        <div className={styles.container}>
            <p className={styles.name}>
                Kanyes Thaker
            </p>
            <p className={styles.textBlock}>
                I'm a machine learning engineer at <a href="https://snorkel.ai">snorkel.ai</a>.
            </p>
            <p className={styles.textBlock}>
                I graduated from UC Berkeley with a B.A. in CS and math in 2021. While I was there, I <Link to="/iris">started a company</Link>, did some quant <a>internships</a>, and led <a href="https://mdb.dev">mdb.dev</a>.
            </p>
            <p className={styles.textBlock}>
                I believe that building the future starts with a deep understanding of technology. 
                A deep love for and mastery of the frontier of math, science, and technology;
                the ability to transform moonshot ideas into tangible, elegant solutions that address real, important problems; and 
            </p>
            <p><b>Currently learning</b>: Statistical learning, quantum mechanics, distributed systems</p>
            <p><b>Currently reading</b>: <em>Caste</em> by Isabel Wilkerson, <em>That Will Never Work</em> by Marc Randolph</p>
            <p className={styles.textBlock}>
                Contact:<br/>
                kanyes[dot]thaker[at]gmail<br/>
                <a href="https://linkedin.com/in/kanyesthaker" style={{"text-decoration":"none"}}>/in/kanyesthaker</a>
            </p>
            <img src={KanyesImage} width="200px" float="left"/>
        </div>
    )
}
