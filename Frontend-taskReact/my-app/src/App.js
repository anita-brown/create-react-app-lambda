import  React from 'react';
import './App.css';
import Navbar from './components/Navbar'; 
// import About from './components/About';
import Layout from './components/Layout';
import Contributors from './components/Contributors';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Repository from './components/Repository';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      {/* <Layout/> */}
      {/* <About /> */}
      {/* <Contributors/>*/}
      {/* <UserProfile/> */}
      <Repository/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
