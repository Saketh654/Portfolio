import "./Contact.css";
import Image from "next/image";

function Contact() {
    return(
        <div id="c_main">
            <h4>Socials</h4>
            <br></br>
            <a href="https://github.com/Saketh654"><Image
            src="/github.png"
            height={30}
            width={30}
            alt="Github"
            /></a>
            <a href="https://www.instagram.com/saketh_654/profilecard/?igsh=MWMxc3lwcmZvOTk2dg=="><img src="insta.png" alt="Instagram" title="Instagram" /></a>
            <a href="https://www.linkedin.com/in/nagasaketh-chintaluri-913a4b2a0"><img src="linkedin.png" alt="Linkedin" title="Linkedin" /></a>
        </div>
    );
        
}

export default Contact;