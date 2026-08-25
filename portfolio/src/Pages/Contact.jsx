import NavigationBar from "../components/navigationBar";
import Footer from "../components/footer";
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
    <div className="flex flex-col min-h-screen page-text-animation">
            
        <main className="flex flex-col flex-1 
        items-center justify-center gap-12.5 
        md:py-20 py-15 md:px-25 font-poppins w-full ">
            
            <div>
                <h1 className="contact-heading font-bold md:text-5xl text-3xl">Contact Me</h1>
                <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-600" />
            </div>

            <div className="contact-form-container min-w-screen">
                <ContactForm/>
            </div>
            

        </main>

        <footer>
            <Footer/>
        </footer>
            
    </div>);

}

export default Contact;