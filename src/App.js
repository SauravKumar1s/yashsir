import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import WeAre from "./pages/WeAre";
import ImpTech from "./pages/ImpTech";
import CardWithMan from "./pages/CardWithMan";
import TechWithWork from "./pages/TechWithWork";
import { LoginPage } from "./pages/LoginPage";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <ImpTech />
      <CardWithMan/>
      <WeAre />
     
      <TechWithWork/> 
      <Blog />
      <LoginPage/>
      <Footer/>
    </>
  );
}

export default App;
