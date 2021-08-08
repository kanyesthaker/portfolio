import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export const NavBar = (props) => {
    return (
        <div className={styles.container}>
            <ul className={styles.navUl}>
                <li className={styles.navLi}>
                    <Link to="/" className={styles.pageLink}>About</Link>
                </li>
                <li className={styles.navLi}>
                    <Link to="/notes" className={styles.pageLink}>Notes</Link>
                </li>
                <li className={styles.navLi}>
                    <Link to="/posts" className={styles.pageLink}>Posts</Link>
                </li>
                <li className={styles.navLi}>
                    <Link to="/projects" className={styles.pageLink}>Projects</Link>
                </li>
            </ul>
        </div>
    )
}