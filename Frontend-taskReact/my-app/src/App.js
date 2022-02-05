import  React from 'react';
import './App.css';
import Navbar from './components/Navbar'; 
// import About from './components/About';
import Layout from './components/Layout';
import Contributors from './components/Contributors';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Repository from './components/Repository';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route  path="/" element={<Navbar />} />
          <Route  path="/" element={<Contributors />} />

          <Route path="/" element={<Footer />} />

          {/* <Layout/> */}
          {/* <About /> */}
          {/* <Contributors/> */}
          {/* <UserProfile/> */}
          <Repository />
          <Footer />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
