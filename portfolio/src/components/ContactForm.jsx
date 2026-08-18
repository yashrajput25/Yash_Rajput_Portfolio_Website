import SendButton from "./buttons/SendButton";

const ContactForm = () => {

    return (
        <div className="contact-card 
            flex flex-col border-2 border-gray-200 rounded-2xl pt-18.75 pb-10 px-12.5 md:min-w-3xl gap-10">
                
                <div className="contact-form flex flex-col gap-6.25">
                    
                    <div className="flex flex-col gap-2.5">
                        <label className="text-2xl font-semibold text-gray-700">Name</label>

                        <input type="text" placeholder="Your name" className="w-full border-b-2 text-xl border-gray-300 focus:outline-none focus:border-blue-600"/>
                    </div>

                    <div className="flex flex-col gap-2.5">
                        <label className="text-2xl font-semibold text-gray-700">Email</label>

                        <input type="text" placeholder="abc@example.com" className="w-full border-b-2 text-xl border-gray-300 focus:outline-none focus:border-blue-600 transition-colors"/>
                    </div>

                    <div className="flex flex-col gap-2.5">
                        <label className="text-2xl font-semibold text-gray-700">Message</label>

                        <textarea type="text" placeholder="Type your message...." className="w-full min-h-25  border-b-2 text-xl border-gray-300 focus:outline-none focus:border-blue-600"/>
                    </div>
                </div> 
                
                <div className= "flex justify-end mt-5">
                    <SendButton/>
                </div>
            </div>
    );

}

export default ContactForm;