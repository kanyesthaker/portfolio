import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./screens.module.css";
import KanyesImage from "../kanyes.svg";

export default function MainScreen(props) {
  return (
    <div className={styles.container}>
      <p className={styles.name}>Kanyes Thaker</p>
      <p className={styles.textBlock}>
        I'm an applied machine learning engineer at{" "}
        <a href="https://snorkel.ai">snorkel.ai</a> where I work on implementing and deploying ML
        in real-world settings, designing/building our user-facing API, experimenting with LLM embeddings representations, and optimizing core algorithms and metric calculations.
      </p>
      <p className={styles.textBlock}>
        I graduated from UC Berkeley with a B.A. in CS and math in 2021. While I
        was there, I <Link to="/iris">worked on some projects</Link>, interned a bit, and led <a href="https://mdb.dev">mdb.dev</a>.
      </p>
      <p className={styles.textBlock}>
        I'm on a journey to define and do{" "}
        <a href="https://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
          great work
        </a>
        . Building the future begins by understanding how to build great technology, and applying those skills to solve important problems.
        I believe in working towards the future while learning from the past to build powerful products that move the needle towards a more positive future.
      </p>
      <p>
        <b>Currently learning</b>: API design. Topology. Wok cooking. Acoustic guitar. Calisthenics.
      </p>
      <p>
        <b>Currently reading</b>: <em>The Making of the Atomic Bomb</em> by Richard Rhodes
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
