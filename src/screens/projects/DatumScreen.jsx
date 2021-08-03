import styles from "../screens.module.css";

export default function DatumScreen(props) {
    return(
        <div className={styles.container}>
            <p className={styles.title}>
                Projects
            </p>
            <p className={styles.articleTitle}>
                Datum
            </p>
            <p className={styles.textBlock}>
            Datum was the first technical project I ever worked on, a simple Android data plotting application. I built it in 2017 (my freshman year of undergrad) alongside my colleagues at the Mobile Developers of Berkeley, a CS-focused student organization at UC Berkeley.<br/><br/>
            While not particularly feature rich or technically complex, Datum presented me with a unique challenge. As a high schooler, my life was focused on the biological and physical sciences; when I came to Cal with the revalation that my future was better served in CS, I had virtually no practical knowledge, especially in comparison to the seasoned computer scientists in my classes.<br/><br/>
            My responsibilities within the Datum team primarily revolved around working with data -- figuring out efficient ways of storing, retrieving, editing, and monitoring Firebase entries and designing the graphing library that formed the core of the application. Simultaneously, I learned (for the first time!) the fundamentals of designing and building a product alongside a technical team, and that experience has since given me exponential returns in all my subsequent endeavors.<br/><br/>
            Mobile Developers of Berkeley (<a href="https://mdb.dev">mdb</a>) was my first and main home at Cal -- not only did it introduce me to the concept of working on <it>projects</it> along with offering me technical skills, but it opened me up to a vibrant and passionate social community that defined my years in college.
            </p>
        </div>
    )
}