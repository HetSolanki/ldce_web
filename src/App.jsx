import HeroSection from "./components/Sections/HeroSection";
import "./App.css";
import Important from "./components/Sections/Important";
import AcademicUnit from "./components/Sections/AcademicUnit";
import LatestNews from "./components/Sections/LatestNews";
import Events from "./components/Sections/Events";
import PlacementAndGallery from "./components/Sections/PlacementAndGallery";
import Footer from "./components/Sections/Footer";

function App() {
  return (
    <>
      <HeroSection />
      <Important />
      <AcademicUnit />
      <LatestNews />
      <Events />
      <PlacementAndGallery />
      <Footer />
    </>
  );
}

export default App;
