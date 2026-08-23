

import React, { useState } from 'react'
import sshwebsite from '../assets/ssh-website.png';
import ProjectButton from './buttons/ProjectButton';

const ProjectCard = ({title, description,techStack, imageLink, websiteLink, codeLink, isWebsiteLive, allowCodeAccess}) => {
    
    return (
        <div className='project-card flex flex-col flex-wrap h-230 w-180 
        gap-5 border-2 border-gray-200 rounded-3xl py-5 shadow-xl
        transition-transform duration-500 hover:border-blue-500
        hover:scale-105'>

            <div className='image-container px-7'>
                <img className="rounded-2xl" src={imageLink} alt="" />
            </div>

            <div className="flex flex-col flex-wrap project-content-container px-10 gap-6">

                <div>
                    <h1 className='font-bold text-3xl'>{title}</h1>
                </div>

                <div className='flex flex-col gap-8'>
                    <p className='font-semibold text-xl'>{description}</p>
                    <p className='font-semibold text-xl'>
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
