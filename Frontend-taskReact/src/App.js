import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Contributors from "./components/Contributors";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Repository from "./components/Repository";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navbar />
                <Layout />
                <Contributors />
                <Footer />
              </>
            }
          />

          <Route
            exact
            path="/userprofile/:id"
            element={
              <>
                <Navbar />
                <UserProfile />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/repo/:id"
            element={
              <>
                <Navbar />
                <Repository />
                <Footer />
              </>
            }
          />

          <Route
            exact
            path="/contributors"
            element={
              <>
                <Navbar />
                <Contributors />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
