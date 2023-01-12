import { Link } from "react-router-dom";
import styles from "./screens.module.css";

export default function PostsScreen(props) {
    return(
        <div className={styles.container}>
            <p className={styles.title}>Posts</p>
            <ul className={styles.linksUl}>
                <li className={styles.linksLi}>
                    <Link to="/reflection22" className={styles.pageLink}>
                        2023-01-11: A Year in Review - 2022
                    </Link>
                </li>
                <li className={styles.linksLi}>
                    <Link to="/reflection21" className={styles.pageLink}>
                        2022-01-02: A Year in Review - 2021
                    </Link>
                </li>
                <li className={styles.linksLi}>
                    <Link to="/eecs" className={styles.pageLink}>
                        2021-09-05: Looking Back on Berkeley EECS
                    </Link>
                </li>
                <li className={styles.linksLi}>
                    <a href="https://kanyes.notion.site/ML-Metrics-Matter-456064b143d14fa5ba80e13aba40b842" className={styles.pageLink}>
                        2021-05-24: ML Metrics Matter
                    </a>
                </li>
            </ul>
        </div>
    )
}