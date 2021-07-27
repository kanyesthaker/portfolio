// import "./screens.styles.css";
import styles from "./screens.module.css";

export default function NotesScreen(props) {
    return(
        <div className={styles.container}>
            <p className={styles.title}>
                Notes
            </p>
            <ul>
                <li className={styles.linksLi}>
                    <a href="https://drive.google.com/file/d/1IKpLYahg9lFPCBePW4mFhUHwRYzzJl3v/view">
                        Differential Geometry
                    </a>
                </li>
                <li className={styles.linksLi}>
                    <a href="https://drive.google.com/file/d/1gZLXWnhl2DsVk9K5n4Sr-c25JI5ChYrL/view">
                        Complex Analysis
                    </a>
                </li>
                <li className={styles.linksLi}>
                    <a href="https://drive.google.com/file/d/1uaw9WRfe2XzNse4c-XAv0g5B7ByV7UY0/view">
                        Measure Theory
                    </a>
                </li>
                <li className={styles.linksLi}>
                    <a href="https://drive.google.com/file/d/1W5DoRh0CewlhtoGpPUtNJNfiu9BHXCX3/view">
                        Numerical Methods
                    </a>
                </li>
                <li className={styles.linksLi}>
                    <a href="https://drive.google.com/file/d/17F-OsZM9tAp9nEgMnRj3Wgra7hlZdIPz/view">
                        Abstract Algebra
                    </a>
                </li>
                <li className={styles.linksLi}>
                    <a href="https://drive.google.com/file/d/1Kcv5ia_1e8lVjhzarNGRiE7b2ZUhv3mB/view">
                        Probability
                    </a>
                </li>
                <li className={styles.linksLi}>
                    <a href="https://drive.google.com/file/d/1PtYh_WVH5dOQxpCJhrv0CQs-POlo7vqn/view">
                        Analysis
                    </a>
                </li>
                <li className={styles.linksLi}>
                    <a href="https://drive.google.com/file/d/1k0OZsTSBT32shEd0lKE3f8YF1Jt5p34t/view">
                        Optimization
                    </a>
                </li>
                <li className={styles.linksLi}>
                    <a href="https://drive.google.com/file/d/1JQ1fze-KriBkNX5pTUA1omW4P4Gsznyw/view">
                        Algorithms
                    </a>
                </li>
            </ul>
        </div>
    )
}