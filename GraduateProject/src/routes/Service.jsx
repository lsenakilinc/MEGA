import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Trip from "../components/Trip"

function Service (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg="https://i.neredekal.com/i/neredekal/6073818aad45ec7fc62b91b3"
        // title="Service"
        btnClass="hide"
        />
        <Trip/>
        <Footer/>
        </>
    )
}

export default Service;