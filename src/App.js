import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from "./Pages/Home/Contact";
import Footer from "./Pages/Footer/Footer";
import AboutMe from "./Pages/AboutMe/AboutMe";
import MyProject from "./Pages/Home/MyProject";
function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="about" element={<AboutMe />}></Route>
        <Route path="project" element={<MyProject />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>

  );
}

export default App;
