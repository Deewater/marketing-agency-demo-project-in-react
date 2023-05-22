
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar  from "./components/header/Navbar";
import Footer  from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Services from "./pages/services/Services";
import Privacy from "./pages/privacy/Privacy";
import Terms from "./pages/termscondition/Terms";
import Contact from "./pages/contact_us/Contact";
import SingleBlog from './pages/singleblog/SingleBlog';
import { useState, createContext } from 'react';
export const AppContext= createContext();


function App() {
  const [id,setId]=useState(0)
  return (
    <div className="App">
      <AppContext.Provider value={{id,setId}}>
     <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<SingleBlog />} />
          <Route path="/contact_us" element={<Contact />} />
          {/* <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms&Conditions" element={<Terms />} /> */}
          <Route path="*" element={<h1 style={{height:"100vh" ,backgroundColor:"white",textAlign:"center",marginTop:"40vh"}}> PAGE NOT FOUND</h1>} />
        </Routes>
        <Footer/>
      </Router>
      </AppContext.Provider>

      
    </div>
  );
}

export default App;
