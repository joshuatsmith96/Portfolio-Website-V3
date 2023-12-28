import { useRef } from "react";
import emailjs from "@emailjs/browser";


function ContactForm() {
    function validateForm(){
        let allInputs = document.getElementsByTagName("input")
        let textarea = document.getElementsByTagName("textarea")
        let boolean;
        for(let i=0; i<=allInputs.length-1; i++){
            if(allInputs[i].value === ""){
                //Prevent from submitting
                boolean = false;
                allInputs[i].setAttribute("style", "border: solid; color: red;")
            } else {
                boolean = true;
                allInputs[i].setAttribute("style", "")
            }
        }

        if(textarea[0].value === ""){
            boolean = false;
            textarea[0].setAttribute("style", "border: solid; color: red;")
        } else {
            boolean = true;
            textarea[0].setAttribute("style", "")
        }

        if(boolean === true){
            sendEmail()
            //Make "Message Sent" div visible, and the form invisible
            document.getElementsByTagName("form")[0].style.display="none";
            document.getElementById("d1")!.innerHTML = "Message Sent!"
            document.getElementById("d2")!.innerHTML = "I'll get back to you soon!"
        }
    }

    
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
            <h2 id="d1">Want to chat?</h2>
            <p id="d2" >Fill out the form below!</p>
            <form ref={form}>
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
                    <a id="form-submit" onClick={validateForm}>Send Message</a>
                </div>
            </form>
        </div>
    )
}

export default ContactForm