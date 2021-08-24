import logo from './logo.svg';
import './App.css';
import Header from "./components/header/index";
import Navbar from "./components/navbar/index";
import Heroimg from "./components/hero-div/index"
import Banner1 from "./components/banner/banner1"
import DonateInfo from "./components/donate-info/index"
import Miscompo from "./components/misc_components/header1"
import Card1 from "./components/cards/card1"
import Listing_react from "./components/misc_components/listing_react"
import Card2 from "./components/cards/card2"
import Banner25 from "./components/banner/banner2/banner2"
import ContactUs from "./components/contactUs/ContactUs"
import Banner3 from "./components/banner/banner2/Banner3"
import Footer from "./components/footer/footer"
function App() {
  return (
    <div className="App">
     <Header/>
     <Navbar/>
     <Heroimg/>
     <Banner1/>
     <DonateInfo/>
    <Miscompo/>
    <Card1/>
    <Listing_react/>
    <Card2/>
    <Banner25/>
    <ContactUs/>
    <Banner3/>
    <Footer/>
    
   
    
    

    </div>
  );
}

export default App;
