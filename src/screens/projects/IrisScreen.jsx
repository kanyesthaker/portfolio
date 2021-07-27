import globalStyles from "../screens.module.css";
import articleStyles from "../../components/article.module.css";

export default function IrisScreen(props) {
    const styles = {...globalStyles, ...articleStyles};
    return(
        <div className={styles.container}>
            <p className={styles.articleTitle}>
                Projects
            </p>
            <p className="article-title">
                Iris
            </p>
        </div>
    )
}