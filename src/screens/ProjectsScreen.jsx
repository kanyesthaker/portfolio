import { Link } from "react-router-dom";
import styles from "./screens.module.css";

export default function ProjectsScreen(props) {
    return(
        <div className={styles.container}>
            <p className={styles.title}>
                Active Projects
            </p>
            <ul className={styles.linksUl}>
                <li className={styles.linksLi}>
                    <a href="https://kanyes.notion.site/Keyboard-8dcf71094ec1487b8ba48c6cf11786a5?pvs=4" className={styles.linksLi}>
                        Handwired Keyboard
                    </a>
                </li>
                <li className={styles.linksLi}>
                    <a href="https://pypi.org/project/postgres-csv-uploader/" className={styles.linksLi}>
                        Postgres-CSV Uploader
                    </a>
                </li>
                <li className={styles.linksLi}>
                    <a href="https://spacebar.herokuapp.com/" className={styles.linksLi}>
                        SpaceBar[WIP]
                    </a>
                </li>
            </ul>
            <p className={styles.title}>
                Inactive Projects
            </p>
            <ul className={styles.linksUl}>
                <li className={styles.linksLi}>
                    <Link to="/iris" className={styles.pageLink}>
                        IRIS - A personal internet
                    </Link>
                </li>
                <li className={styles.linksLi}>
                    <a href="https://chrome.google.com/webstore/detail/ferret/mjnmolplinickaigofdpejfgfoehnlbh#:~:text=Ferret%20is%20a%20helpful%20sidekick,you%20read%20on%20the%20internet." calssName={styles.pageLink}>
                        Ferret - NLP-powered flashcards for the whole internet
                    </a>
                </li>
                <li className={styles.linksLi}>
                    <Link to="/close" className={styles.pageLink}>Close Crisis - Pre-Google local COVID dashboard</Link>
                </li>
                <li className={styles.linksLi}>
                    <Link to="/wave" className={styles.pageLink}>Wave - Change your accent with neural voice cloning</Link>
                </li>
                <li className={styles.linksLi}>
                    <Link to="/dropthefax" className={styles.pageLink}>Drop the Fax - Protest tuition hikes during COVID</Link>
                </li>
                <li className={styles.linksLi}>
                    <Link to="/datum" className={styles.pageLink}>Datum - Android habit tracker</Link>
                </li>
            </ul>
        </div>
    )
}