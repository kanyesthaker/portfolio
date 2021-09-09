import { Link } from "react-router-dom";
import styles from "./screens.module.css";

export default function PostsScreen(props) {
    return(
        <div className={styles.container}>
            <p className={styles.title}>Posts</p>
            <ul>
                <li className={styles.linksLi}>
                    <Link to="/eecs" className={styles.pageLink}>
                        Looking Back on Berkeley EECS: 2021-09-05
                    </Link>
                </li>
            </ul>
        </div>
    )
}