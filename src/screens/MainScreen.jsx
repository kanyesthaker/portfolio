import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./screens.module.css";

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
                I'm looking to learn, explore, and build the future of technology. I'm interested in solving the hard tech problems of the future while paying attention to the social issues that surround tech today.
            </p>
            <p><b>Currently learning</b>: Statistical learning, quantum mechanics, distributed systems</p>
            <p><b>Currently reading</b>: <em>Caste</em> by Isabel Wilkerson, <em>The Score Takes Care of Itself</em> by Bill Walsh</p>
            <p className={styles.textBlock}>
                Contact:<br/>
                kanyes[dot]thaker[at]gmail<br/>
                <a href="https://linkedin.com/in/kanyesthaker" style={{"text-decoration":"none"}}>/in/kanyesthaker</a>
            </p>
        </div>
    )
}
