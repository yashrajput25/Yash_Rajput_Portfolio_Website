
import face from "../assets/face.png"
import ContactButton from "./buttons/ContactButton";

const MainPageContent = () =>{

    return (
    <div className="flex gap-10 items-center-safe justify-center-safe py-20">
        
        <div className="introduction-container flex flex-col gap-5">
            <h1 className="text-6xl md:text-9xl font-semibold font-poppins">Hi,</h1>
            <h1 className="text-6xl md:text-9xl font-semibold font-poppins">I am <span className="text-[#4070F4]">Yash</span></h1>

            <div className="py-10">
                <ContactButton/>
            </div>
        </div>

        <div className="image-container size-150">
            <img src={face} alt="face_image" />
        </div>

    </div>
    );

}

export default MainPageContent;