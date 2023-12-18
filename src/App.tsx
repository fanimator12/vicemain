import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  return (
    <div className="App">
      <Header handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
      <LandingPage />
    </div>
  );
}

export default App;
