import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import NotFound from "./Pages/NotFound/NotFound";
import About from "./Pages/About/About";
import Specialist from "./Pages/Specialist/Specialist";
import Contact from "./Pages/Contact/Contact";
import ServiceDetail from "./Pages/Home/ServiceDetail/ServiceDetail";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Services from "./Pages/Home/Services/Services";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header></Header>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />

          <Route
            path="/servicedetail/:serviceID"
            element={
              <PrivateRoute>
                <ServiceDetail />
              </PrivateRoute>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/specialist" element={<Specialist />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
