import NavigationBar from "../components/navigationBar";
import Footer from "../components/footer";
import Card from "../components/card";
import educationDetails from "../data/educationDetails";


const Education = () => { 
    return <div className="flex flex-col min-h-screen">

        <header>
            <NavigationBar/>
        </header>

        <main className="education-details-content 
        md:px-[100px] md:py-[100px] px-[50px] py-[50px]">

            <div className="flex flex-col gap-[35px]">

                <div className="flex flex-col items-center justify-center mb-[20px]">
                    
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-600">
                        My Journey
                    </p>

                    <h1 className="font-poppins text-4xl font-semibold text-slate-900 sm:text-5xl">
                        Education
                    </h1>
                    <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-600" />
                </div>
            

                {
                    educationDetails.map((education)=>{

                        return (
                        <Card
                        year={education.year}
                        degree={education.degree}
                        college={education.college}
                        location={education.location}
                        link={education.link}
                        />
                    );
                    })
                }

            </div>


            
        </main>

        <footer>
            <Footer/>
        </footer>
        
    </div>

}

export default Education;