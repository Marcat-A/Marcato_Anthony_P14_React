import "./globals.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";
import ViewEmployees from "./pages/ViewEmployees";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route exact path="/" element={<CreateEmployee />} />
          <Route exact path="/view" element={<ViewEmployees />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
