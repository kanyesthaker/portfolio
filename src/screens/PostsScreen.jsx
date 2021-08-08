import { Link } from "react-router-dom";
import styles from "./screens.module.css";

export default function PostsScreen(props) {
    return(
        <div className={styles.container}>
            <p className={styles.title}>Posts</p>
            <p>(This page is still under construction)</p>
            <ul>
                <li className={styles.linksLi}>
                    [[ Placeholder ]]
                </li>
            </ul>
        </div>
    )
}