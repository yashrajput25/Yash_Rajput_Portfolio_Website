import { useEffect, useState } from "react";
import SendButton from "./buttons/SendButton";
import Swal from 'sweetalert2'

const ContactForm = () => {

    const onSubmit = async (event)=>{
            event.preventDefault();
            const formData = new FormData(event.target);
            formData.append("access_key", "e93cdb45-9cd1-44cf-a049-9059b78be400");

            console.log(Object.fromEntries(formData.entries()));

            const response = await fetch("https://api.web3forms.com/submit",{
                method: "POST",
                body: formData
            });

            const data = await response.json();
            if(data.success){
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success",
                    color: "#374151",
                    confirmButtonColor: "#4070F4"
                    });
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    color: "#374151",
                    confirmButtonColor: "#4070F4"
                    });
            }
    }

    return (
        <form onSubmit = {onSubmit} 
        className="contact-card 
            flex flex-col border-2 border-gray-200 rounded-2xl 
            pt-18.75 pb-10 md:px-12.5 md:mx-50 mx-5 px-5 gap-7.5
            hover:scale-105 hover:shadow-2xl
            active:shadow-2xl
            ">
                
                <div className="contact-form flex flex-col gap-6.25">
                    
                    <div className="flex flex-col gap-2.5">
                        <label className="md:text-2xl text-xl font-semibold text-gray-700">Name</label>

                        <input type="text" name="name" placeholder="Enter your name" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"/>
                    </div>

                    <div className="flex flex-col gap-2.5">
                        <label className="md:text-2xl text-xl font-semibold text-gray-700">Email</label>

                        <input name="email" type="text" placeholder="Enter your email" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 transition-colors"/>
                    </div>

                    <div className="flex flex-col gap-2.5">
                        <label className="md:text-2xl text-xl font-semibold text-gray-700">Message</label>

                        <textarea name="message" type="text" placeholder="Enter your message" className="w-full min-h-25 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"/>
                    </div>
                </div> 
                
                <div className= "flex justify-end mt-5">
                    <SendButton/>
                </div>
            </form>
    );

}

export default ContactForm;