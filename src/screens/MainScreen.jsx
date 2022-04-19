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
                I graduated from UC Berkeley with a B.A. in CS and math in 2021. While I was there, I <Link to="/iris">started a company</Link>, did some quant internships, and led <a href="https://mdb.dev">mdb.dev</a>.
            </p>
            <p className={styles.textBlock}>
                I'm on a journey to define and do <a href="https://www.cs.virginia.edu/~robins/YouAndYourResearch.html">great work</a>. 
                I believe that building the future begins with a deep mastery of frontier technology, and a broad knowledge of how to elegantly apply that technology to real, high-impact problems.
                I'm invested in learning from history and studying the present to solve the hard tech problems of the future.
            </p>
            <p><b>Currently learning</b>: Statistical learning, quantum mechanics, distributed systems</p>
            <p><b>Currently reading</b>: <em>The Wizard of Menlo Park</em> by Randall Stross, <em>Cool Gray City of Love</em> by Gary Kamiya, <em>The Innovator's Dilemma</em> by Clayton Christensen
            <p className={styles.textBlock}>
                Contact:<br/>
                kanyes[dot]thaker[at]gmail<br/>
                <a href="https://linkedin.com/in/kanyesthaker" style={{"text-decoration":"none"}}>/in/kanyesthaker</a>
            </p>
            <div style={{"text-align":"right"}}><img src={KanyesImage} width="200px" float="left"/></div>
        </div>
    )
}
