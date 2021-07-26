import "./screens.styles.css";
import { ProjectModal } from "../components/ProjectModal"

export default function ProjectsScreen(props) {
    return(
        <div>
            <p className="title">
                Projects
            </p>
            <ProjectModal/>
        </div>
    )
}