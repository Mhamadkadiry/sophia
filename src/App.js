import React from "react";
import "./App.scss";
import { Navbar } from "./components";
import {
  About,
  Footer,
  Header,
  Services,
  Testimonials,
  Portfolio,
  Copyright,
} from "./container";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
