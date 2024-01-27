import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import AboutUs from "../components/AboutUs"

function About (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg="https://pbs.twimg.com/profile_images/1403425879758454791/wZ-7RsZX_400x400.jpg"
        // title="About"
        btnClass="hide"
        />
        <AboutUs/>
        <Footer/>
        </>
    )
}

export default About;