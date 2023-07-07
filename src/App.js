import React from "react";
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import NoPage from './pages/nopage';
import Projects from './pages/projects';
import NavBar from "./components/navbar";



import { Routes, Route} from "react-router-dom";


function App() {
  return (
  
    <div className='App'>
        
        <NavBar />
        
        <p></p>
         <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />}/>
            <Route path="/homepage" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="*" element={<NoPage />} />
          </Routes>
       
          
    </div>
  );  
}

export default App;
