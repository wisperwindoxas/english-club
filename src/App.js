import React from 'react'
import './App.css';

import {Route,Routes } from 'react-router-dom'
import Home from "./Home";
import BegCategory from "./components/Lessons/Category";
import Price from './components/Price/Price';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
function App() {



  return (
    <div className="App">

        <Routes>
            <Route path={"/"} element={<Home/>} />
            <Route path={"/beginner"} element={<BegCategory text={'Beginner'}/>} exact={true} />
            <Route path={"/elementary"} element={<BegCategory text={'Elementary'}/>} exact={true} />
            <Route path={"/intermediate"} element={<BegCategory text={'Intermediate'}/>} exact={true} />
            <Route path={"/pre-intermediate"} element={<BegCategory text={'Pre-intermediate'}/>} exact={true} />
            <Route path={"/price"} element={<Price/>} exact={true} />
            <Route path={"/about"} element={<About/>} exact={true} />
            <Route path={"/contact"} element={<Contact/>} exact={true} />
        </Routes>


    </div>
  );
}

export default App;
