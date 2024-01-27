import Activity from "../components/Activity";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trip from "../components/Trip";
import Footer from "../components/Footer"

function Home (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg="https://cdn.gokonya.com/other/meram-cay.jpg"
        // title="MEGA Meram Gelişim Akademisi"
        // text="MEGA Yazılım Akademisi Başlıyor!"
        buttonText="MEGA Yazılım"
        url="/"
        // btnClass="show"
        />
        <Activity/>
        <Trip/>
        <Footer/>
        </>
    )
}

export default Home;