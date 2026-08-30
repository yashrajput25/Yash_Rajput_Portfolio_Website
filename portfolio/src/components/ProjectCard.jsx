

import React, { useState } from 'react'
import sshwebsite from '../assets/ssh-website.png';
import ProjectButton from './buttons/ProjectButton';

const ProjectCard = ({title, description,techStack, imageLink, websiteLink, codeLink, isWebsiteLive, allowCodeAccess}) => {
    
    return (
        <div 
        data-aos="flip-down"
        className='project-card flex flex-col flex-wrap sm:min-w-f md:h-230 md:w-180 
        gap-5 border-2 border-gray-200 rounded-3xl py-5 shadow-xl
        transition-transform duration-500 hover:border-blue-500
        hover:scale-105 active:shadow-2xl
        active:scale-105 active:border-[#4070F4]'>

            <div className='image-container px-7'>
                <img className="rounded-2xl border-2 border-gray-200" src={imageLink} alt="" />
            </div>

            <div className="flex flex-col flex-wrap project-content-container px-10 gap-6">

                <div>
                    <h1 className='font-bold md:text-3xl text-2xl'>{title}</h1>
                </div>

                <div className='flex flex-col gap-8'>
                    <p className='font-semibold md:text-xl text-gray-600'>{description}</p>
                    <p className='font-semibold md:text-xl text-gray-600'>
                        <span className='font-bold'> Tech Stack : </span>
                        {techStack}
                    </p>

                    </div>

                <div className='flex flex-wrap gap-5'>

                    {isWebsiteLive && <ProjectButton text="View Live" link={websiteLink}/>}
                    {allowCodeAccess && <ProjectButton text="Code Link" link={codeLink}/>}
                </div>

            </div>
            
        </div>
    )
}

export default ProjectCard
