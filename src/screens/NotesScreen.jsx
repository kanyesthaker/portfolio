import { Link } from "react-router-dom";
import styles from "./screens.module.css";

export default function NotesScreen(props) {
    return(
        <div className={styles.container}>
            <p className={styles.title}>
                Notes
            </p>
            <ul className={styles.linksUl}>
                <li className={styles.linksLi}>
                    Machine Learning (Coming Soon)
                </li>
                <li className={styles.linksLi}>
                    <a href={process.env.PUBLIC_URL+'/notes/differential-geometry.pdf'}>Differential Geometry</a>
                </li>
                <li className={styles.linksLi}>
                    <a href={process.env.PUBLIC_URL+'/notes/complex-analysis.pdf'}>Complex Analysis</a>
                </li>
                <li className={styles.linksLi}>
                <a href={process.env.PUBLIC_URL+'/notes/measure-theory.pdf'}>Measure Theory</a>
                </li>
                <li className={styles.linksLi}>
                <a href={process.env.PUBLIC_URL+'/notes/numerical-analysis.pdf'}>Numerical Analysis</a>
                </li>
                <li className={styles.linksLi}>
                <a href={process.env.PUBLIC_URL+'/notes/abstract-algebra.pdf'}>Abstract Algebra</a>
                </li>
                <li className={styles.linksLi}>
                <a href={process.env.PUBLIC_URL+'/notes/probability.pdf'}>Probability</a>
                </li>
                <li className={styles.linksLi}>
                <a href={process.env.PUBLIC_URL+'/notes/analysis.pdf'}>Analysis</a>
                </li>
                <li className={styles.linksLi}>
                <a href={process.env.PUBLIC_URL+'/notes/optimization.pdf'}>Optimization</a>
                </li>
                <li className={styles.linksLi}>
                <a href={process.env.PUBLIC_URL+'/notes/algorithms.pdf'}>Algorithms</a>
                </li>
            </ul>
        </div>
    )
}