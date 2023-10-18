 
import '../styles/styles.css'


const Footer = () => {
    const year = new Date().getFullYear();

    return(
        <>
            <div className="footer">
               {`Erica Borromeo © ${year}`}
            </div>
        
        </>

    )
}


export default Footer;