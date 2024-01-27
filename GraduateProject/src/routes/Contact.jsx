import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm"

function Contact (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg="https://www.meram.bel.tr/upload/medya/MRM_2455.jpg"
        // title="Contact"
        btnClass="hide"
        />
        <ContactForm/>
        <Footer/>
        </>
    )
}

export default Contact;