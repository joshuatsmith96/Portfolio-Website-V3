import { useRef } from "react";
import emailjs from "@emailjs/browser";


function ContactForm() {

    const form: any = useRef();

    const sendEmail = () => {
        emailjs
            .sendForm(
                "service_ig752d9",
                "template_yybutzh",
                form.current!,
                "SFLxiJQnkzg28apJM"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="ContactForm">
            <h2>Want to chat?</h2>
            <p>Fill out the form below!</p>
            <form ref={form} onSubmit={sendEmail}>
                <div className="name-inputs">
                    <input type="text" placeholder="Name" name="user_name" />
                </div>
                <div className="name-inputs">
                    <input type="text" placeholder="Email" name="user_email" />
                </div>
                <div className="name-inputs">
                    <input type="text" placeholder="Subject" name="user_subject" />
                </div>
                <textarea placeholder="Enter Message Here" name="message" />
                <div className="center">
                    <button type="submit">Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm