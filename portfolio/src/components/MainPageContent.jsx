
import face from "../assets/face.png"
import ContactButton from "./buttons/ContactButton";

const MainPageContent = () =>{

    return (
    <div className="flex flex-col-reverse md:flex-row lg:flex-row gap-10 items-center-safe justify-center-safe py-20">
        
        <div className="introduction-container flex flex-col gap-5">
            <h1 className="text-6xl md:text-9xl font-semibold font-poppins">Hi,</h1>
            <h1 className="text-6xl md:text-9xl font-semibold font-poppins">I am <span className="text-[#4070F4]">Yash</span></h1>

            <div className="flex gap-10 py-10 px-10">
                <ContactButton text={"Get in touch"}/>
                <ContactButton text={"Download Resume"}/>
                
            </div>
        </div>

        <div className="image-container size-75 md:size-150">
            <img src={face} alt="face_image" />
        </div>

    </div>
    );

}

export default MainPageContent;