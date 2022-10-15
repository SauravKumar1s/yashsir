import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import WeAre from "./pages/WeAre";
import ImpTech from "./pages/ImpTech";
import CardWithMan from "./pages/CardWithMan";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <ImpTech />
      <CardWithMan/>
      <WeAre />
      <Blog />
    </>
  );
}

export default App;
