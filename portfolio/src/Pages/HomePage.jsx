
import MainPageContent from "../components/MainPageContent"
import Footer from "../components/footer"
import ParticlesBg from 'particles-bg'

const Home = ()=> {
    return (

    <div>
        
    <div className="flex flex-col min-h-full">

    <ParticlesBg color="#4070F4" num={45} 
        type="cobweb" bg={true} />

        <section className="mb-0 flex-1">
            <MainPageContent/>
        </section>            
    </div>

    <footer className="">
            <Footer/>
    </footer>

    </div>
    );
}

export default Home;