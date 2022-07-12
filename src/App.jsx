import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from './Products'
import {Routes, Route } from "react-router-dom";
import Detail from "./Detail";
import Cart from "./Cart"


export default function App() {
  return ( //refer synthentic events in react-notes(142) If you forget what properties are available on event, set a debugger and inspect the event. 
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome to Carved Rock Fitness</h1>} />
            <Route path="/:category" element={<Products />} />
            <Route path="/:category/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
} //when does react render? react-notes(160)
//To fetch data from a API we can use the useEffect hook, runs after each render.
//UseEffect is like a configurable lifecycle method 
