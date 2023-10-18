 
import '../styles/styles.css'
import blog from '../assets/blog.png'


const BlogCard = () => {
    const image = blog;

    return(
        <>
            <div className="center blog-card">
                <img src={`${image}`} alt="blog-img">
                
                </img>

            </div>
        
        </>

    )
}


export default BlogCard;