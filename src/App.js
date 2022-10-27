import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import WeAre from "./pages/WeAre";
import ImpTech from "./pages/ImpTech";
import CardWithMan from "./pages/CardWithMan";
import { LoginPage } from "./pages/LoginPage";
import Footerr from "./pages/Footerr";
import Team from "./pages/Team";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Demos from "./pages/Demos";
import Carrier from "./pages/Carrier";
import Blog2 from "./pages/Blog2";
import OurVision from "./pages/OurVision";
import ServiceGame from "./pages/ServiceGame";
import ServiceMeta from "./pages/ServiceMeta";
import Service3d from "./pages/Service3d";
import ServiceUi from "./pages/ServiceUi";
import ProjectCons from "./pages/ProjectCons";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-black scroll-smooth">
        <div className=" z-50">
          <BrowserRouter>
          <div className="backgroundImghead">
            <Navbar /></div>
            <Routes>
              {/* <Route exact path="/" element={<Home />} /> */}
              <Route exact path="/contact" element={<ContactUs />} />
              <Route exact path="/blog" element={<Blog2 />} />
              <Route exact path="/vrgame" element={<ServiceUi />} />
              <Route exact path="/game" element={<ServiceGame />} />
              <Route exact path="/vrgame" element={<ServiceUi />} />
              {/* <Route exact path="" element={<Service3d />} /> */}
              
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      {/* <div className="font-link bg-black scroll-smooth">
        <ImpTech />
        <WeAre />
        <CardWithMan />

        <Blog/>
      </div>{" "} */}
      {/* <LoginPage />
      <Footerr /> */}
      {/* <Footer /> */}
      {/* <div className="backgroundImg scroll-smooth">
        <div className="bg-black">
          <Team/>
          <ContactUs/>
      
        </div>
      </div> */}
      <div className="backgroundImg scroll-smooth">
        <div className="bg-black">{/* <Services/> */}</div>
      </div>
      <div className="backgroundImgDemo scroll-smooth">
        <div className="bg-black">
          {/* <Team/> */}
          {/* <ContactUs/> */}
          <Services/>
          {/* <Demos/> */}
          <Carrier/>
          <Blog2/>
          <OurVision/>
          <ServiceGame/>
          <ServiceMeta/>
          <Service3d/>
          <ServiceUi/>
          <ProjectCons />
        </div>
      </div>
    </>
  );
}

export default App;
