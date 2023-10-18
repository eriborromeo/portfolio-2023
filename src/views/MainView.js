 
import '../styles/styles.css'

import React from 'react'; 
import Button from '@mui/material/Button';


//Cards
import About from '../cards/AboutCard'
import Contact from '../cards/ContactCard'
import Project from '../cards/ProjectCard'
import Skill from '../cards/SkillCard'
import Blog from '../cards/BlogCard'
import Feedback from '../cards/FeedbackCard';
import ProfileCard from '../cards/ProfileCard';

const MainView = () => {

    return(
        <>
            <div className='main-view'>
                <div class="container">

                    {/* Profile Card*/}
                    <div class="card">
                        <div class="content">
                        <ProfileCard />
                        </div>
                    </div>

                    {/* Project Card*/}

                    <div class="card">
                        <div class="content">
                            <Project />
                        </div>
                    </div>

                    <div class="card">
                        <div class="content">
                        <div class="center services-card">
                            Services
                        </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="content">
                            <Feedback />
                        </div>
                    </div>

                    {/* About Card*/}
                    <div class="card">
                        <div class="content">
                            <About />
                        </div>
                    </div>

                    <div class="card">
                        <div class="content">
                            <Skill />
                        </div>
                    </div>

                    <div class="card">
                        <div class="content">
                            <Blog />
                        </div>
                    </div>

                    <div class="card">
                        <div class="content">
                            <Contact />
                        </div>
                    </div>
                    

                    <div class="download-cv">
                        <Button>Download CV</Button>
                    </div>


                </div>
                

            </div>
          
        
        </>

    )
}


export default MainView;