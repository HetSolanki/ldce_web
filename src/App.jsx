import HeroSection from "./components/Sections/HeroSection";
import "./App.css";
import Important from "./components/Sections/Important";
import AcademicUnit from "./components/Sections/AcademicUnit";
import LatestNews from "./components/Sections/LatestNews";
import Events from "./components/Sections/Events";
import PlacementAndGallery from "./components/Sections/PlacementAndGallery";
import Footer from "./components/Sections/Footer";
import Numbers from "./components/Sections/Numbers";
import CampusLife from "./components/Sections/CampusLife";

function App() {
  return (
    <>
      <HeroSection />
      <Important />
      <AcademicUnit />
      <LatestNews />
      <Events />
      {/* <EventPre /> */}
      <Numbers />
      <CampusLife />
      <PlacementAndGallery />
      <Footer />
    </>
  );
}

export default App;
