import { Link } from "react-router-dom";
import styles from "./screens.module.css";

export default function ProjectsScreen(props) {
    return(
        <div className={styles.container}>
            <p className={styles.title}>
                Projects
            </p>
            <ul>
                <li className={styles.linksLi}>
                    <Link to="/iris" className={styles.pageLink}>
                        IRIS - A personal internet
                    </Link>
                </li>
                {/* <li className={styles.linksLi}>
                        <a href="https://google.com">
                            Ferret - NLP-powered auto-flashcards
                        </a>
                    </li> */}
                <li className={styles.linksLi}>
                    <Link to="/close" className={styles.pageLink}>Close Crisis - Local COVID dashboard pre-Google</Link>
                </li>
                <li className={styles.linksLi}>
                    <Link to="/wave" className={styles.pageLink}>Wave - Change your accent with neural voice cloning</Link>
                </li>
                {/* <li className={styles.linksLi}>
                    <a href="https://drive.google.com/file/d/1IKpLYahg9lFPCBePW4mFhUHwRYzzJl3v/view">
                        Ping - Personal CRM in React Native
                    </a>
                </li>
                <li className={styles.linksLi}>
                    <a href="https://drive.google.com/file/d/1gZLXWnhl2DsVk9K5n4Sr-c25JI5ChYrL/view">
                        RustOS - Simple OS in Rust
                    </a>
                </li>
                <li className={styles.linksLi}>
                    <a href="https://drive.google.com/file/d/1uaw9WRfe2XzNse4c-XAv0g5B7ByV7UY0/view">
                        Glo - LISP interpreter in Golang
                    </a>
                </li>
                <li className={styles.linksLi}>
                    <a href="https://drive.google.com/file/d/1W5DoRh0CewlhtoGpPUtNJNfiu9BHXCX3/view">
                        ELIZA - Chatbot in Clojure
                    </a>
                </li> */}
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