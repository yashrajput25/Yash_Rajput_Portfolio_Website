import NavigationBar from "./components/navigationBar";
import Footer from "./components/footer";
import MainPageContent from "./components/MainPageContent";

const App = () => {

  return (
    <div className="flex flex-col min-h-screen">

            <NavigationBar/>

        <main className="flex-1">
            <MainPageContent/>
        </main>

            <Footer/>
    </div>
  )

}

export default App;

