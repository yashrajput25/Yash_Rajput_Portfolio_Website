
import face from "../assets/face.png"
import ContactButton from "./buttons/ContactButton";
import Typewriter from 'typewriter-effect';

const MainPageContent = () =>{

    return (
    <div className="flex flex-col-reverse md:flex-row gap-10 items-center justify-center px-4 md:px-15 md:py-20 py-10">
        
        <div className="introduction-container flex flex-col gap-5 page-text-animation">
            <div className="flex flex-col gap-5 px-10">
                <h1 className="text-6xl md:text-9xl font-semibold font-poppins">Hi,</h1>
                <h1 className="text-6xl md:text-9xl font-semibold font-poppins">I am <span className="text-[#4070F4]">Yash</span></h1>
                <div className="text-2xl md:text-4xl font-semibold font-poppins">
                        <Typewriter
                            options={{
                                strings: ['Full Stack Developer', 'Software Engineer'],
                                autoStart: true,
                                loop: true,
                            }}/>
                </div>

                <p className="
                    text-lg
                    md:text-xl
                    text-gray-600
                    leading-relaxed
                    max-w-xl
                ">
                    I build modern and scalable web applications
                    with a focus on clean design, efficient backend
                    systems, and great user experiences.
                </p>
            </div>




            <div className="flex gap-10 py-2.5 px-10 md:px-10">
                <a href="https://drive.google.com/file/d/1BxBKq1GQMSljecyZ8VYOermU2zs_TCph/" target="_blank">
                    <ContactButton text={"Download Resume"}/>
                </a>
                
            </div>
        </div>

        <div className="image-container page-text-animation size-75 md:size-150 transition-transform duration-500 hover:scale-105 active:scale-110">
            <img src={face} alt="face_image" />
        </div>

    </div>
    );

}

export default MainPageContent;