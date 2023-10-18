import '../styles/styles.css'



const ContactCard = () => {
   const email = "ririborromeo@gmail.com";
   const contactNum = "+639763397866";
    return(
        <>
           <div class="center contact-card">
                <h4>ping me @</h4>
                <p className='email'>{`${email}`}</p>  
                <p className='contact-num'>{`${contactNum}`}</p>
            </div>
        
        </>

    )
}


export default ContactCard;

