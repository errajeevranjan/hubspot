import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Section from "./components/Section";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Features from "./components/features/Features";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <Section />
        <Home />
        <Features />
        <Footer />
      </div>
    );
  }
}
export default App;
