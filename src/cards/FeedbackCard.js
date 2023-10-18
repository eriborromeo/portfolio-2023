 
import '../styles/styles.css'


const FeedbackCard = () => {
    const feedback = "Special thanks to EM Borromeo for your dedication to completing this rigorous project";
    const client = "William Mingone";
    return(
        <>
            <div className="center feedback-card">
                <h3>“</h3>
                <h4>{`${feedback}`}</h4>
                <b> - </b>
                <p>{`${client}`}</p>
            </div>
        
        </>

    )
}


export default FeedbackCard;