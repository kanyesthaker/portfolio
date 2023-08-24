import { Link } from "react-router-dom";
import styles from "../screens.module.css";

export default function EecsScreen(props) {
    return(
        <div className={styles.container}>
            <p className={styles.title}>
                Posts
            </p>
            <p className={styles.articleTitle}>
                Looking Back at Berkeley EECS
            </p>
            <p className={styles.articleSubtitle}>
                2021-09-05
            </p>
            <p className={styles.textBlock}>I left Berkeley in May 2021. Over the years, I've been engaged in countless conversations — with faculty, peers, student leaders, and prospective Cal students (along with their parents). Here's my overview on some of the key issues in the Berkeley EECS department, and the prospects for the future.</p>
            <p className={styles.textBlock}>To contextualize everything a bit, I arrived on Cal's campus in August 2017 along with over 15,500 other freshmen. I was one of around 1,800 students in Cal's introductory CS class that Fall semester; within those 1,800 were a few hundred directly admitted EECS majors and several hundred prospective L&S CS majors, along with an assortment of other engineering and pure science concentrations.</p>
            <p className={styles.textBlock}>Berkeley computer science is notorious for its size, prestige, and difficulty.  Of the aforementioned L&S CS hopefuls, fewer than 50% would manage to secure the 3.3 average GPA in the requisite lower-division courses to be granted the coveted signatures on their major declaration forms. College Facebook meme pages stereotyped Berkeley EE/CS students as those who never slept, never showered, struggled with impossible assignments and rejoiced at a 40% on an exam.</p>
            <p className={styles.textBlock}>The CS department caters heavily to those with a background in CS, backed by a professorship of strict academics who sometimes prefer preserving the integrity of the material over increasing explainability. Access for those individuals who do not come from a background in technology is increasingly limited as the size of the department scales; students who truly start from an introductory level often find themselves struggling to join the intensity of the program, competing with a large student body of Silicon-Valley-magnet-school natives and ridigly rigorous faculty.</p>
            <p className={styles.textBlock}>While the lower divisions present a challenge, the difficulties compound in the upper divisions. Collaboration is criminalized — almost every course has a zero-tolerance policy towards almost any kind of collaboration, extending well beyond the traditional bounds of academic dishonesty. Pair programming and joint whiteboarding are often explicitly prohibited for the majority of assignments. I have found this practice in particular to be especially incongruent with industry reality, moreso than other industries where full self-sufficiency may be more beneficial.</p>
            <p className={styles.textBlock}>In perhaps one of the most collaborative industries on the planet, where every tech office has torn down cubicles to make way for open workplaces, this academic culture does little to benefit students. And to be fair, cheating does run rampant in the EECS department. And while there are plenty of folks I knew who really didn't care, I had an unfortunate number of friends who felt compelled to by the environment they were in. It's no wonder students cheat when exam averages dip below 40% and assignments overlap and compound every week, often with ambiguous instructions and floating deadlines; when some of the most influential voices in the department advocate for an <a href="https://www.dailycal.org/2019/03/10/uc-berkeley-computer-science-students-push-back-on-80-hour-work-week/"> 80-hour work week</a> for classes and classwork alone. Cheating itself isn't justified, but it is worth examining the circumstances that push some otherwise honest students in that direction.</p>
            <p className={styles.textBlock}>COVID-19, for all its horrors, offered an unprecedented opportunity to transform higher education. The expectation would be that a department like EECS, positioned at the forefront of this technology already, could reinvent itself. CS classes consisted of highly surveilled (check <a href="https://sp21.datastructur.es/materials/exam/proctoring">this</a> out) exams, and the exact same amount of aggressive anti-collaboration culture that existed pre-COVID. </p>
            <p className={styles.textBlock}>The marginal innovation in EECS paled in comparison to the innovation in other departments; the art classes I took needed to invent themselves from the ground up to accomodate the sudden void of a physical medium. What little innovation there <em>was</em> often came about because of individual TAs who took the burden upon themselves to reinvent curriculum, with a handful of TAs speaking out against brutal exam proctoring policies and ridiculous workloads in the context of the pandemic. Some classes did innovate; CS182 (Neural Networks) turned its exams into two-week-long take-home assignments consisting of deeply thoughtful non-recall-based questions, requiring students to read research papers and fundamentally reinforce their understanding of the material — open internet, open notes, open everything. It is an unfortunately isolated example.</p>
            <p className={styles.textBlock}>None of this is to say that Berkeley CS isn't good enough. From the numbers alone, it is objectively good enough; Berkeley students flood FAANG offices every year, go on to prestigious PhD programs, and reinvent technology. But it is a travesty that the best talent at Berkeley is taught year after year, semester after semester that all that matters is to be good enough. That while Stanford CS students pick classes they are deeply passionate about and get 1 on 1 time with the best in the Valley, Berkeley students race to fill spots in the upper divisions with the highest GPA averages (usually a B+ at best) to keep themselves afloat and keep their grad school dreams alive. That the overwhelming rigidity of the department — with regards to collaboration, workloads, grading, and time — leads many Cal grads to avoid taking the kinds of risks the industry needs to advance.</p>
            <p className={styles.textBlock}>So Berkeley CS is good enough to where the numbers would never indicate that something was wrong; but its unique position in Silicon Valley opens up so many roads for paradigm-breaking education that simply are not being actively explored. Cal has the history, the positioning, and the talent (although perhaps not the funding) to reinvent the CS experience; to experiment with new forms of instruction and exams, bring in desperately needed collaborative policy, and address the massive issues with diversity and inclusion in technology.</p>
            <p className={styles.textBlock}>And Berkeley CS is hard, but it would be dishonest to deny that it's hard for a reason; Berkeley graduates are incredible technologists; they understand first principles and have a deep respect for the science that backs innovation. They are scrappy, willing and able to fight for themselves to find the opportunities they want. I wish that it were taught this way though; only a tiny, tiny fraction of the EECS kids I've met understand the motivation behind the rigor. Most professors don't care to teach it that way.</p>
            <p className={styles.textBlock}>But conversations are beginning to open up on campus. <a href="https://www2.eecs.berkeley.edu/Courses/CS194_4431/">Courses</a> are being offered which directly link EECS to social justice topics; <a href="https://changemaker.berkeley.edu/home">entrepreneurship</a> is starting to become a permanent feature on campus (albeit starting from the business side). The return to on-campus education will hopefully allow students and faculty the opportunity to regroup and reassess the EECS climate, and student organizations (like the <a href="https://mdb.dev/">Mobile Developers of Berkeley</a>) actively work to bring resources and opportunities closer to the student body. Department heads are beginning to understand the need to evolve, and are actively including students in their conversations. The issues on collaboration and toxic work culture are being vocalized in every corner of the department. With continued effort and involvement from students and faculty, Berkeley EECS can become a fundamentally inspiring and forward-thinking department; well beyond the realm of "good enough."</p>
        </div>
    )
}