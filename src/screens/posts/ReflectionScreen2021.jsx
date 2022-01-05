import { Link } from "react-router-dom";
import styles from "../screens.module.css";

export default function ReflectionScreen2021(props) {
    return(
        <div className={styles.container}>
            <p className={styles.title}>
                Posts
            </p>
            <p className={styles.articleTitle}>
                A Year in Review -- 2021
            </p>
            <p className={styles.articleSubtitle}>
                2022-01-02
            </p>
            <p className={styles.textBlock}>Anthropologists define liminality as the ambiguity that lies between the statuses before and after a life-altering ritual. It exists both in the realms of space and time, as most things do; the hazy period lingering in the void between one state of being and the next. It describes a graduation ceremony; a career change; a move; a pandemic. It encapsulates the key theme of the last 584 million miles ranged by the planet earth in its unceasing journey around the sun.</p>
            <p className={styles.textBlock}>I wrote a reflection at the end of 2020 to wrap up what was (at the time) the most critical year in my life; this writeup is a one-time sequel in some ways and a many-time prequel in others. Last year’s reflection was born of my transition into the startup world, a world which at the time I knew little about. The optimism I wrote that piece with reflects how little I knew; the unbridled optimism of barely-21-year-old me is now met with some of the more achievable (if less impressive-sounding) realism of barely-22-year-old me.</p>
            <p className={styles.textBlock}>This year came with its own challenges and opportunities; it’s one that looks fantastic on paper. I graduated from a top US school, I have a great job, great friends, a great family. I’m fortunate enough to have largely avoided the brutality of the COVID-19 pandemic; I’m in a position in life that at least 7 billion individuals on planet earth would kill to be in. Yet the sheer mass of possibilities in front of me — what to build, how to live, how to think, how to act — sprawl infinitely into the future, in a maze I have no idea how to navigate.</p>
            <p className={styles.textBlock}>I finished off my coursework at UC Berkeley with three courses — complex analysis,  differential geometry, and ethics in Silicon Valley. I dropped my 4th course of statistical thermodynamics after 3 weeks, since I didn’t know anyone in the class, nor did I know any*thing* in the class. I took a ton of <a href="http://kany.es/notes">notes</a>, created my first <a href="https://youtu.be/9xgli0GM29w">instructional video</a>; I walked across the stage of the Berkeley Greek Theater in May to accept my diploma with a double major in Computer Science and Mathematics.</p>
            <p className={styles.textBlock}>I co-created a <a href="https://chrome.google.com/webstore/detail/ferret/mjnmolplinickaigofdpejfgfoehnlbh">Chrome extension</a> with Sam, my brother from Burbank, that uses NLP to help you learn on the fly (which <a href="https://twitter.com/KanyesThaker/status/1431378692912025604?s=20">caught the attention</a> of the HuggingFace founders and is currently sitting at <a href="https://github.com/kanyesthaker/qgqa-flashcards">61 GitHub stars</a>). I got a job at <a href="https://snorkel.ai">Snorkel AI</a>, where I work on understanding how real people struggle with data and design intelligent systems to make high-quality ML accessible to all.</p>
       </div>
    )
}