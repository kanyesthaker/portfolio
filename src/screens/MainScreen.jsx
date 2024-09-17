import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./screens.module.css";
import KanyesImage from "../kanyes.svg";

export default function MainScreen(props) {
  return (
    <div className={styles.container}>
      <p className={styles.name}>Kanyes Thaker</p>
      <p className={styles.textBlock}>
        I'm on the software team at{" "}<a href="https://maticrobots.com/">maticrobots.com</a> where I focus on motion planning algorithms.
      </p>
      <p>
        Previously, I was an applied ML engineer at{" "}
        <a href="https://snorkel.ai">snorkel.ai</a> where my work spanned ML solutions, SDK/API design,
        infrastructure, data processing, distillation, explainability, and core algorithm design and optimization.
      </p>
      <p className={styles.textBlock}>
        I graduated from UC Berkeley with a B.A. in CS and math in 2021. While I
        was there, I <Link to="/iris">worked on some projects</Link>, interned around, and led <a href="https://mdb.dev">mdb.dev</a>.
      </p>
      <p className={styles.textBlock}>
        I'm on a journey to define and do{" "}
        <a href="https://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
          great work
        </a>
        . Building the future begins by understanding important problems, then solving them with beautiful, powerful, and innovative technology.
        I'm inspired by the artists, mathematicians, designers, musicians, scientists, engineers, and inventors who changed the world by relentlessly pursuing the vision that inspired them. 
        I believe in building wonderful products that move the needle towards a more positive future.
      </p>
      <p>
        <b>Currently learning</b>: Mead making. Acoustic guitar. Optimization. How to use my air fryer.
      </p>
      <p>
        <b>Currently reading</b>: <em>Insanely Simple</em> by Ken Segall
      </p>
      <p className={styles.textBlock}>
        Contact:
        <br />
        kanyes[dot]thaker[at]gmail
        <br />
        <a
          href="https://linkedin.com/in/kanyesthaker"
          style={{ "text-decoration": "none" }}
        >
          /in/kanyesthaker
        </a>
      </p>
      <div style={{ "text-align": "right" }}>
        <img src={KanyesImage} width="200px" float="left" />
      </div>
    </div>
  );
}
