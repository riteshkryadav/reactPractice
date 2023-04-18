import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Count from "./components/reactHooks/useState";
import Effect from "./components/reactHooks/useEffect";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  //javascript

  return (
    <div className="containerStyle">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Footer />} />
          <Route path="/Hero" element={<Hero />} />
          <Route path="/useEffect" element={<Effect />} />
          <Route path="/useState" element={<Count />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

// import "./App.css";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Project from "./components/Project";
// import Profile from "./components/Profile";
// import Nav from "./components/Nav";
// import { useState } from "react";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <h1 className="text-center text-[5rem]">React Routes</h1>
//         <Nav />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/about/profile" element={<Profile />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/project" element={<Project />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
