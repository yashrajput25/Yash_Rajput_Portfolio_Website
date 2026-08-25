import NavigationBar from "../components/navigationBar"
import MainPageContent from "../components/MainPageContent"
import Footer from "../components/footer"
import FluidCursor from "../components/FluidCursor"

const Home = ()=> {
    return (

    <div>
        
    <div className="flex flex-col h-full min-h-screen">

        <section className="flex-1">
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