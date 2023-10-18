 
import '../styles/styles.css'
import react from '../assets/react.png'


const SkillCard = () => {
    const image = react;

    return(
        <>
            <div className="center skill-card">
                <img src={`${image}`} alt="skill-img">
                
                </img>

            </div>
        
        </>

    )
}


export default SkillCard;