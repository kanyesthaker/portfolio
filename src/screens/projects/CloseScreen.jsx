import { Link } from "react-router-dom";
import styles from "../screens.module.css";

export default function CloseScreen(props) {
    return(
        <div className={styles.container}>
            <p className={styles.title}>
                Projects
            </p>
            <p className={styles.articleTitle}>
                Close Crisis
            </p>
            <p className={styles.textBlock}>
            Close Crisis was a React website with a Python backend (deployed on AWS) that offered local, county-specific COVID news, updates, and statistics at the very start of the COVID-19 pandemic in the United States. I was responsible for the backend; a team of Berkeley and Stanford students were responsible for the frontend.<br/><br/>
            Close was an immediate reaction to the demise of <Link to="/iris">Iris 1.0</Link>, when my team and I came to the conclusion that our product simply wasn't important in a pandemic-ruled world; that we should attempt to extend the frameworks we had built to create something tangibly useful.<br/><br/>
            We built Close by manually combing through hundreds of RSS feeds for local, county and city-specific news agencies in California. We built out the entire website in a manner of weeks, and rolled it out by the beginning of April. At its peak, Close was receiving over 2,000 clicks a day.
            </p>
        </div>
    )
}