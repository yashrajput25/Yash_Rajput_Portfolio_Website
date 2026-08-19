
import face from "../assets/face.png"
import ContactButton from "./buttons/ContactButton";

const MainPageContent = () =>{

    return (
    <div className="flex flex-col-reverse md:flex-row lg:flex-row gap-10 items-center-safe justify-center-safe py-20">
        
        <div className="introduction-container flex flex-col gap-2.5">
            <div className="flex flex-col gap-2.5 px-10">
                <h1 className="text-6xl md:text-9xl font-semibold font-poppins">Hi,</h1>
                <h1 className="text-6xl md:text-9xl font-semibold font-poppins">I am <span className="text-[#4070F4]">Yash</span></h1>
            </div>

            <div className="flex gap-10 py-2.5 px-10">
                <a href="https://drive.google.com/file/d/1BxBKq1GQMSljecyZ8VYOermU2zs_TCph/" target="_blank">
                    <ContactButton text={"Download Resume"}/>
                </a>
                
            </div>
        </div>

        <div className="image-container size-75 md:size-150">
            <img src={face} alt="face_image" />
        </div>

    </div>
    );

}

export default MainPageContent;