import { Link } from "react-router-dom";
import styles from "../screens.module.css";

export default function LearningScreen(props) {
    return(
        <div className={styles.container}>
            <p className={styles.title}>
                Posts
            </p>
            <p className={styles.articleTitle}>
                Study Habits
            </p>
            <p className={styles.articleSubtitle}>
                2022-07-14
            </p>
            <p className={styles.textBlock}>Learning outside of an organized environment is difficult. It is hard to understand what objectives to prioritize, how to structure studying, and how to ensure long-term understanding and recall. This is made worse by having split prioritization — balancing a full-time job, the other facets of life, and the infrequent interruptions that pepper the day-to-day.</p>

            <p className={styles.textBlock}>Understanding moves along a spectrum, as per Bloom’s taxonomy of educational learning — recall, understanding, application, analysis, synthesis, creation. The ultimate goal of study is to get to the stage of creation, where the ideas that were learned can be used to generate something greater than the sum of its parts. But knowledge must move through each of these tiers in order for the creative endeavor to be fruitful.</p>

            <p className={styles.textBlock}>There are a variety of techniques meant to ensure success at each level of learning. Recall is best practiced through spaced repetition, wherein concepts are repeated and reinforced at regular intervals to combat the dreaded “forgetting curve.” Understanding involves being able to describe and discuss concepts, or translate them from the source to a new medium for explainability. Application requires solving problems and building projects that expressly test the topics that were learned. Analysis involves drawing connections between topics and recognizing when ideas overlap. Synthesis then involves meaningfully interpreting the differences between those ideas. Creation then takes the sum total of the previous parts and creates something brand new from them.</p>

            <p className={styles.textBlock}>There are several tools that can be used to practice each part of this hierarchy. These aren’t linear — each of these things should be done multiple times, in parallel, to ensure proper understanding. Likewise, no step in this pyramid should take an unreasonable amount of time; the key to long-term retention and understanding is brief yet frequent iterations on the idea. The goal is to make studying approachable and manageable; to make each task small enough to be done in under an hour yet for the information to last for years.</p>

            <p className={styles.textBlock}>**First pass:** Take notes by hand — pen/paper, ipad, etc. Handwriting has been shown to be a more effective mechanism for learning than typing ([source](https://www.sciencedirect.com/science/article/abs/pii/S0001691804001167))</p>

            <p className={styles.textBlock}>**Recall:** Spaced repetition via **Anki**, an old-but-gold flashcard application that actively implements spaced repetition. The first run through the flashcards happens after a few minutes; the next after a day, then a few days, then a week, then a month. Checking with these on a regular cadence — 1 day, 3 days, 1 week, 2 weeks, 1 month, 6 months — is essential to combatting the [forgetting curve](https://www.mindtools.com/pages/article/forgetting-curve.htm).</p>

            <p className={styles.textBlock}>**Understanding:** Understanding involves the ability to translate, summarize, or discuss a particular topic. To that end, it is useful to translate learnings at a weekly cadence into some concise yet comprehensive format, for instance notes on **Overleaf** or **Notion**. It is important to do this without reference the source material if possible.</p>

            <p className={styles.textBlock}>**Application:** Practice problems, projects, examples, and real-world applications are important for forming a kind of mind-muscle connection, especially for abstract concepts that must be drawn out to be understood. This is probably the phase that is the most difficult to accomplish outside of a structured learning environment. In school, assignments, projects etc. are given to you — outside of school, you have to identify opportunities to apply new knowledge without any guiding hand.</p>

            <p className={styles.textBlock}>**Analysis:** Organizing information relative to other information, and drawing meaningful connections between related ideas, is made easy through a personal knowledge management software (PKMS) such as **Obsidian** or **Roam**. These tools make it easy to draw links in between topics that are related. A somewhat regular (biweekly/monthly) dump into these tools helps turn individual learnings into a broader network of ideas.</p>

            <p className={styles.textBlock}>**Synthesis:** Once the connections between these ideas have been made, it is critical to synthesize them together — to explicitly understand the similarities and differences between approaches to problems, and to be able to meaningfully form an opinion on the applications of multiple ideas simultaneously. This can come in the form of a blog post, a literature review, a video, a project, etc., that explicitly explore the tradeoffs between related concepts.</p>
            <p className={styles.textBlock}>**Creation:** Creation is the endgame of study — the ability to transform existing material into a tool for discovering something brand new. Creation is building a product, starting a company, doing novel research, filming a movie, writing a song, etc., in a manner which is *informed* by existing work but that does not attempt to *emulate* it.</p>
        </div>
    )
}