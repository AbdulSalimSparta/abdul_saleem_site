import { BrowserRouter as Router, Routes, Route, /*useLocation*/ } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import IndivProjects from "./pages/IndivProjects/IndivProjects";
import "./style.css";
import Header from "./components/Header/Header";
import MainPage from "./MainPage";
import LenisManager from "./components/LenisManager";
import Details from "./pages/Details/Details";
import SoftGlow from "./components/SoftGlow";

// import Preloader from "./components/PreLoader/PreLoader";
// import { useEffect, useState } from "react";
function AppContent() {
  // const location = useLocation();
  // const [loading, setLoading] = useState(location.pathname === "/");

  // useEffect(() => {
  //   if (location.pathname === "/") {
  //     setLoading(true);
  //   } else {
  //     setLoading(false);
  //   }
  // }, [location.pathname]);

  return (
    <>
      <LenisManager />
      {/* {location.pathname === "/" && loading && (
        <Preloader onFinish={() => setLoading(false)} />
      )} */}
      <SoftGlow />
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage /*startAnimation={!loading}*/ />} />
          <Route path="/projects/:id" element={<IndivProjects />} />
          <Route path="/Details" element={<Details />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
