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
                        IRIS - A personal assistant
                    </Link>
                </li>
            </ul>
        </div>
    )
}

                    {/* <li className="links-li">
                        <a href="https://google.com">
                            Ferret - NLP-powered auto-flashcards
                        </a>
                    </li>
                    <li className="links-li">
                        <a href="https://drive.google.com/file/d/1Kcv5ia_1e8lVjhzarNGRiE7b2ZUhv3mB/view">
                            Close Crisis - Local COVID dashboard pre-Google
                        </a>
                    </li>
                    <li className="links-li">
                        <a href="https://drive.google.com/file/d/1k0OZsTSBT32shEd0lKE3f8YF1Jt5p34t/view">
                            Wave - Change your accent with neural voice cloning
                        </a>
                    </li>
                    <li className="links-li">
                        <a href="https://drive.google.com/file/d/1IKpLYahg9lFPCBePW4mFhUHwRYzzJl3v/view">
                            Ping - Personal CRM in React Native
                        </a>
                    </li>
                    <li className="links-li">
                        <a href="https://drive.google.com/file/d/1gZLXWnhl2DsVk9K5n4Sr-c25JI5ChYrL/view">
                            RustOS - Simple OS in Rust
                        </a>
                    </li>
                    <li className="links-li">
                        <a href="https://drive.google.com/file/d/1uaw9WRfe2XzNse4c-XAv0g5B7ByV7UY0/view">
                            Glo - LISP interpreter in Golang
                        </a>
                    </li>
                    <li className="links-li">
                        <a href="https://drive.google.com/file/d/1W5DoRh0CewlhtoGpPUtNJNfiu9BHXCX3/view">
                            ELIZA - Chatbot in Clojure
                        </a>
                    </li>
                    <li className="links-li">
                        <a href="https://drive.google.com/file/d/1PtYh_WVH5dOQxpCJhrv0CQs-POlo7vqn/view">
                            Drop the Fax - Protest tuition hikes during COVID
                        </a>
                    </li>
                    <li className="links-li">
                        <a href="https://drive.google.com/file/d/1JQ1fze-KriBkNX5pTUA1omW4P4Gsznyw/view">
                            Datum - Android habit tracker
                        </a>
                    </li> */}