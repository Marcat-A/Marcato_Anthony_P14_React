import "./globals.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";
import ViewEmployees from "./pages/ViewEmployees";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Navbar />
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route exact path="/" element={<CreateEmployee />} />
              <Route exact path="/view" element={<ViewEmployees />} />
            </Routes>
            <Footer />
          </PersistGate>
        </Provider>
      </Router>
    </>
  );
}

export default App;
