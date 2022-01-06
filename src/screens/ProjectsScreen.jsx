import { Link } from "react-router-dom";
import styles from "./screens.module.css";

export default function ProjectsScreen(props) {
    return(
        <div className={styles.container}>
            <p className={styles.title}>
                Projects
            </p>
            <ul className={styles.linksUl}>
                <li className={styles.linksLi}>
                    <Link to="/iris" className={styles.pageLink}>
                        IRIS - A personal internet
                    </Link>
                </li>
                <li className={styles.linksLi}>
                    <Link to="/ferret" calssName={styles.pageLink}>
                        Ferret - NLP-powered flashcards for the whole internet
                    </Link>
                </li>
                <li className={styles.linksLi}>
                    <Link to="/close" className={styles.pageLink}>Close Crisis - Local COVID dashboard pre-Google</Link>
                </li>
                <li className={styles.linksLi}>
                    <Link to="/wave" className={styles.pageLink}>Wave - Change your accent with neural voice cloning</Link>
                </li>
                <li className={styles.linksLi}>
                    <Link to="/drop" className={styles.pageLink}>Drop the Fax - Protest tuition hikes during COVID</Link>
                </li>
                <li className={styles.linksLi}>
                    <Link to="/datum" className={styles.pageLink}>Datum - Android habit tracker</Link>
                </li>
            </ul>
        </div>
    )
}