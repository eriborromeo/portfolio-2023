 
import '../styles/styles.css'
import proj from '../assets/proj.png'

const ProjectCard = () => {
    const image = proj;

    return(
        <>
            <div class="center project-card">
                <img src={`${image}`} alt="proj-img">
                
                </img>

            </div>
        </>

    )
}


export default ProjectCard;