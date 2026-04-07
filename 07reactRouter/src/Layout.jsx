import React from "react";
import Footer from './components/footer/footer'
import {Outlet} from 'react-router-dom'
import Header from "./components/header/header";
function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>

        </>
    )
}
export default Layout