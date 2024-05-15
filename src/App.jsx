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
import Preloader from "../src/components/preloader";
import { useState, useEffect } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible && <Preloader />}
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
