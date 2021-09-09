import { Link } from "react-router-dom";
import styles from "../screens.module.css";

export default function FerretScreen(props) {
    return(
        <div className={styles.container}>
            <p className={styles.title}>
                Projects
            </p>
            <p className={styles.articleTitle}>
                Flashcard Ferret
            </p>
            <p className={styles.textBlock}>
            Ferret is a Chrome extension that uses NLP to generate recall-based flashcards to help reinforce ideas from nearly any page on the internet. 
            Ferret is powered by two HuggingFace models (T5 for question generation and RoBERTa for question answering), deployed on AWS Sagemaker and served to a React JS frontend through AWS Lambda and API Gateway.
            Ferret is available <a href="https://chrome.google.com/webstore/detail/ferret/mjnmolplinickaigofdpejfgfoehnlbh?hl=en&authuser=1">here</a>, and you can check out the <a href="https://github.com/kanyesthaker/qgqa-flashcards/">GitHub</a> repo to see (and contribute to!) the project.
            </p>
        </div>
    )
}