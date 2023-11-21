function ContactForm(){
    return(
        <div className="ContactForm">
            <h2>Want to chat?</h2>
            <p>Fill out the form below!</p>
            <div className="name-inputs">
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
            </div>
            <div className="name-inputs">
            <input type="text" placeholder="Email"/>
            </div>
            <div className="name-inputs">
            <input type="text" placeholder="Subject"/>
            </div>
            <textarea />
            <div className="center">
            <button>Send Message</button>
            </div>
        </div>
    )
}

export default ContactForm