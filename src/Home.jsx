import React from 'react'
import HeaderContent from "./components/Header/HeaderContent";
import Pages from "./components/Content";
import Header from "./components/Header/Header";


function  Home() {
    return(
        <>
            <Header/>
            <HeaderContent/>
            <Pages/>
        </>
    )
}


export default Home;