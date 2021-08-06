import { Link } from "react-router-dom";
import styles from "../screens.module.css";

export default function DropScreen(props) {
    return(
        <div className={styles.container}>
            <p className={styles.title}>
                Projects
            </p>
            <p className={styles.articleTitle}>
                Drop the Fax
            </p>
            <p className={styles.textBlock}>
            Drop the Fax was a React website with an AWS backend, intended to serve as a piece of virtual performance art. During the pandemic, several public and private insitutions raised student tuition while providing an inferior quality of education.<br/><br/>
            Drop the Fax aimed to highlight the absurdity of placing additional financial burden on already struggling students while administrators appeared to be aiming to inconvinence themselves as little as possible. The premise was simple -- most institutions receive invoices for purchases; we aimed to (in one simple button) send fax invoices demanding restitution to your university's administration.<br/><br/>
            Drop the Fax was more an experiment in virality and artistic activism rather than a bonafide tech product. The faxes themselves were almost always automatically blocked by spam filters. However, it was a fantastic way to investigate the limits of and approaches to applying technology to social situations.
            </p>
        </div>
    )
}