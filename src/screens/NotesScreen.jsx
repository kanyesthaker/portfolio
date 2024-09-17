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
                    <a href={process.env.PUBLIC_URL+'/notes/clrs.pdf'}>Algorithms, Cormen et al</a>
                </li>
                <li className={styles.linksLi}>
                    <a href={process.env.PUBLIC_URL+'/notes/machine-learning.pdf'}>Machine Learning, Hastie et al</a>
                </li>
                <li className={styles.linksLi}>
                    <a href={process.env.PUBLIC_URL+'/notes/intro-probability.pdf'}>Probability, Ross</a>
                </li>
                <li className={styles.linksLi}>
                    <a href={process.env.PUBLIC_URL+'/notes/linear-algebra.pdf'}>Linear Algebra, Friedberg et al</a>
                </li>
                <li className={styles.linksLi}>
                    <a href={process.env.PUBLIC_URL+'/notes/differential-geometry.pdf'}>Differential Geometry, Millman and Parker</a>
                </li>
                <li className={styles.linksLi}>
                    <a href={process.env.PUBLIC_URL+'/notes/complex-analysis.pdf'}>Complex Analysis</a>
                </li>
                <li className={styles.linksLi}>
                    <a href={process.env.PUBLIC_URL+'/notes/measure-theory.pdf'}>Measure Theory, Billingsley; Bass</a>
                </li>
                <li className={styles.linksLi}>
                <a href={process.env.PUBLIC_URL+'/notes/numerical-analysis.pdf'}>Numerical Analysis, Burden and Faires</a>
                </li>
                <li className={styles.linksLi}>
                <a href={process.env.PUBLIC_URL+'/notes/abstract-algebra.pdf'}>Abstract Algebra, Fraleigh</a>
                </li>
                <li className={styles.linksLi}>
                <a href={process.env.PUBLIC_URL+'/notes/probability.pdf'}>Probability, Bertsekas and Tsitsiklis</a>
                </li>
                <li className={styles.linksLi}>
                <a href={process.env.PUBLIC_URL+'/notes/analysis.pdf'}>Analysis, Ross</a>
                </li>
                <li className={styles.linksLi}>
                <a href={process.env.PUBLIC_URL+'/notes/optimization.pdf'}>Optimization, Al Ghaoui</a>
                </li>
                <li className={styles.linksLi}>
                <a href={process.env.PUBLIC_URL+'/notes/algorithms.pdf'}>Algorithms, Dasgupta et al</a>
                </li>
            </ul>
        </div>
    )
}
