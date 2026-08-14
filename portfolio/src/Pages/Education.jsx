import NavigationBar from "../components/navigationBar";
import Footer from "../components/footer";
import Card from "../components/card";
import educationDetails from "../data/educationDetails";


const Education = () => { 
    return <div className="flex flex-col min-h-screen">
        <header>
            <NavigationBar/>
        </header>

        <main className="education-details-content">
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
            
        </main>

        <footer>
            <Footer/>
        </footer>
        
    </div>

}

export default Education;