import styles from "../screens.module.css";

export default function IrisScreen(props) {
    return(
        <div className={styles.container}>
            <p className={styles.title}>
                Projects
            </p>
            <p className={styles.articleTitle}>
                Iris
            </p>
            <p className={styles.textBlock}>
            I built Iris, my first major "side project", in November 2019 alongside two of my best friends, Shalin Shah (EECS Cal '21, currently SWE at Matician) and Sam Gorman (CS/Design Stanford '21, currently pursuing an MS at Stanford). My main technical roles concerned data and backend engineering, along with major product and design decisions.<br/><br/>
            Iris was meant to be a "personal internet." While products like Google Home and Alexa concentrate on serving you generalized information (i.e. results that someone else created for their own use cases), we believed that as humans our lives are largely controlled by in-the-moment, highly context-specific decisions. Our goal was to create a product that could serve you highly contextualized information in real time that couldn't be found by a simple Google search.<br/><br/>
            Iris began as a campus assistant, offering Cal students highly personalized, context-aware information about their campus and their lifestyles surrounding it. This version of Iris, "Iris 1.0," was an iOS app that we built in the span of 2 months. We launched Iris 1.0 in mid March 2020 and quickly grew to several hundred users in less than two days; unfortunately, the COVID-19 pandemic halted our growth indefinitely and we were forced to terminate. At this time, even with just two full days of growth, we were receiving offers on the order of $125k from VC firms; we declined.<br/><br/>
            Over the next several months, we spun off over a dozen pivots, ranging from a highly local COVID-19 dashboard (pre-Google) to a personalized recipes app to a "personal compass for online school." After 10 months of trying to find our footing, the Iris team disbanded in November 2020. <br/><br/>
            In total, Iris amassed several thousands of Figma wireframes and tens of thousands of lines of Swift and Python code. Iris was an adventure in starting a company, and along the way we explored an entire suite of skills and technologies: HCI, product design, UI/UX, mobile development, database design, systems engineering, data science, and backend infrastructure. We collectively have well over 10,000 hours in Notion, Figma, XCode, and the AWS and GCP consoles. We met with 30+ student founders, hosted multiple quarantine "idea mixers," and received 12 years worth of lessons in the span of 12 months. Iris was instrumental in setting the stage for my future; its lessons have been invaluable and excite me for the terrific journey ahead.<br/>
            </p>
        </div>
    )
}