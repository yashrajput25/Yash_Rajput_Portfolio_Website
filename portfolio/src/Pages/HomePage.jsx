import NavigationBar from "../components/navigationBar"
import MainPageContent from "../components/MainPageContent"
import Footer from "../components/footer"
import FluidCursor from "../components/FluidCursor"

const Home = ()=> {
    return (
        
    <div className="flex flex-col min-h-screen">

        <main className="flex-1">
            <MainPageContent/>
        </main>

        <footer>
            <Footer/>
        </footer>
            
    </div>
    );
}

export default Home;