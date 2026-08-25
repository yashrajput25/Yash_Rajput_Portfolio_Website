import React from 'react'
import ProjectCard from '../components/ProjectCard'
import MiniProjectCard from '../components/MiniProjectCard';
import cognitrix from "../assets/cognitrix.png";
import ssh from "../assets/ssh-website.png";
import Footer from '../components/footer';

const Projects = () => {
    return (
        <div className= "project-page-content page-text-animation flex flex-col flex-wrap justify-center-safe items-center-safe pt-12.5 gap-25 px-8.5 min-h-screen">

            <div className='professional-project-container flex flex-wrap flex-col items-center-safe justify-center gap-10'>

                <div>
                    <h1 className='md:text-4xl text-3xl font-poppins font-semibold text-slate-900 '>Professional Projects</h1>    
                    <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-600" />
                </div>    

                <div className='flex flex-wrap gap-10 items-center-safe justify-center'>

                    <ProjectCard
                    title={"Cognitrix: An E-Learning Platform"}
                    description={"Cognitrix is an interactive learning platform with dedicated student and professor portals, offering structured lectures, quizzes, progress tracking, and gamification. Students can track their progress, take quizzes, earn coins and badges, and compete on leaderboards, while professors can manage courses, monitor engagement, and assess performance. It is currently used by ECE students at IIIT Delhi for learning."}
                    techStack={"  React.js, Node.js, Express.js, MongoDB"}
                    imageLink={cognitrix}
                    isWebsiteLive={true}
                    allowCodeAccess={false}
                    websiteLink={"https://cognitrixstudent.netlify.app/"}
                    />
                    <ProjectCard
                    title={"SSH Department Website"}
                    description={"The official website of the Social Sciences and Humanities (SSH) Department at IIIT Delhi, created to provide students, faculty, and visitors with information about the department, its programs, faculty, research, courses, and activities. The website focuses on a clean, accessible, and user-friendly experience for exploring departmental resources."}
                    techStack={"  HTML, CSS, JavaScript"}
                    imageLink={ssh}
                    isWebsiteLive={true}
                    allowCodeAccess={false}
                    websiteLink={"https://ssh.iiitd.ac.in/"}
                    />

                </div>



            </div>

        <div className= 'personal-project-container flex flex-wrap flex-col items-center-safe justify-center gap-10'>
            
            <div>
                    <h1 className='md:text-4xl text-3xl font-poppins font-semibold text-slate-900 '>Personal Projects</h1>    
                    <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-600" />
            </div>  

            <div className='flex flex-wrap gap-10 items-center-safe justify-center'>
        
            <MiniProjectCard
            title={"Healthcare Portal"}
            description={"A full-stack patient appointment booking system where patients can register, browse available doctors, and schedule appointments. Built with a modern tech stack featuring a responsive Next.js frontend and a robust Express.js backend with JWT-based authentication and MongoDB for data persistence."}
            techStack={"  React.js, Node.js, Express.js, MongoDB, Tailwind CSS"}
            isWebsiteLive={false}
            allowCodeAccess={true}
            codeLink={"https://github.com/yashrajput25/Healthcare_portal"}
            />

            <MiniProjectCard
            title={"Journal App"}
            description={"A full-stack end-to-end encrypted journal application built with Spring Boot, featuring user authentication, MongoDB persistence, and email notifications. The application demonstrates core Spring Boot concepts including REST APIs, security configuration, and database integration."}
            techStack={"  Java, Spring Boot 2.7, Spring Security, Spring Data MongoDB, Spring Mail, Maven, MongoDB"}
            isWebsiteLive={false}
            allowCodeAccess={true}
            codeLink={"https://github.com/yashrajput25/Spring_boot"}

            />

            <MiniProjectCard
                title={"Edu-Research Integrator"}
                description={"A full-stack LLM-powered query system that bridges SQL and NoSQL databases. Users submit natural language questions, which are automatically translated into separate SQL (SQLite) and MongoDB queries using Google Gemini. The system executes both queries in parallel, intelligently merges results by student ID, and returns unified data combining student records with their academic publications."}
                techStack={"  Python, FastAPI, SQLAlchemy, PyMongo, Google Gemini API, React, Vite, Axios, SQLite, MongoDB"}
                isWebsiteLive={false}
                allowCodeAccess={true}
                codeLink={"https://github.com/yashrajput25/data_bridge"}
            />

            <MiniProjectCard
                title={"Chef Claude"}
                description={"Chef Claude is an interactive recipe suggestion app that leverages AI to generate customized recipes based on ingredients users input. Users can dynamically add ingredients, and once they have three or more, they can request an AI-generated recipe tailored to their ingredient list."}
                techStack={"React, Hugging Face Inference API, JavaScript, CSS, HTML, and Node.js/npm for development."}
                isWebsiteLive={false}
                allowCodeAccess={true}
                codeLink={"https://github.com/yashrajput25/chefclaude"}
            />

            <MiniProjectCard
            title={"E‑commerce Frontend"}
            description={"A lightweight, static front‑end demo of an e‑commerce flow that showcases product browsing, a shopping-cart/checkout experience, and order/tracking pages. It’s built as client‑side HTML pages that demonstrate UI layout, DOM interactions, and basic client‑side state for an online store."}
            techStack={"  HTML, CSS, Vanilla JavaScript (DOM manipulation, UI logic, client-side state)"}
            isWebsiteLive={false}
            allowCodeAccess={true}
            codeLink={"https://github.com/yashrajput25/1"}
            />

            <MiniProjectCard
                title={"Market Order Execution Engine"}
                description={" A real-time order processing system that routes market orders between decentralized exchanges (Raydium & Meteora), executes swaps concurrently, and streams live status updates to clients via WebSocket. Built with Node.js + TypeScript, Fastify, BullMQ (Redis job queue), and PostgreSQL for persistence."}
                techStack={" Node.js, TypeScript, Fastify, BullMQ, Redis, PostgreSQL, TypeORM, WebSocket"}
                isWebsiteLive={false}
                allowCodeAccess={true}
                codeLink={"https://github.com/yashrajput25/EternaProject"}
            />



            </div>
            

        </div>

        <Footer/>
        
        </div>
    )
}

export default Projects
