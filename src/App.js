import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import WeAre from "./pages/WeAre";
import ImpTech from "./pages/ImpTech";
import CardWithMan from "./pages/CardWithMan";
import { LoginPage } from "./pages/LoginPage";
import Footerr from "./pages/Footerr";


function App() {
  return (
    <>
      <div className="bg-black scroll-smooth">
        <div className="backgroundImghead bg-black">
          <Navbar />
          <Home />
        </div>
      </div>
      <div className="font-link bg-black scroll-smooth">
        <ImpTech />
        <WeAre />
        <CardWithMan />

        <Blog/>
      </div>{" "}
      <LoginPage />
      <Footerr />
      {/* <Footer /> */}
    </>
  );
}

export default App;
