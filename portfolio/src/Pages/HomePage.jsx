import NavigationBar from "../components/navigationBar"
import MainPageContent from "../components/MainPageContent"
import Footer from "../components/footer"

const Home = ()=> {
    return (
    <div className="flex flex-col min-h-screen">
        <header>
            <NavigationBar/>
        </header>
            

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