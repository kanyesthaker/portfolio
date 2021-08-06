import styles from "../screens.module.css";

export default function WaveScreen(props) {
    return(
        <div className={styles.container}>
            <p className={styles.title}>
                Projects
            </p>
            <p className={styles.articleTitle}>
                Datum
            </p>
            <p className={styles.textBlock}>
            Wave (2018) was a demo of neural voice cloning for accent transfer, based on Baidu research's <i>Neural Voice Cloning with a Few Samples</i>, based on Deepmind's WaveNet architecture. I took on this project in a team of 5, and was largely responsible for background work and all data preprocessing and feature extraction. <br/><br/>
            </p>
        </div>
    )
}