import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageContext from "./PageContext";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Welcome from './components/Welcome/Welcome';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';

function App() {
  const [user, setUser] = useState({ loggedIn: false });
  const value = { user, setUser };

  return (
    <div className="App">
      <PageContext.Provider value={value}>
        <div className="pages">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/home" element={[<Header />, <Home />, <Footer />]} />
              <Route path="/about" element={[<Header />, <About />, <Footer />]} />
              <Route path="/projects" element={[<Header />, <Projects />, <Footer />]} />
              <Route path="/contact" element={[<Header />, <Contact />, <Footer />]} />
              <Route path='*' element={[<Header />, <NotFound />, <Footer />]} />
            </Routes>
          </BrowserRouter>
        </div>
      </PageContext.Provider>
    </div>
  );
}

export default App;





