import React from 'react'
import header from './header.module.css'
import english_logo from './icons/english_logo.png'
import {Link} from 'react-router-dom'
function Header(){

    const [showCourses, setShowCourses] = React.useState(false)
    function onScrollEvent(e){
        console.log(e)
    }

    return(
        <div onScroll={(e) => onScrollEvent(e)}  className={header.header}>
                <div className="container">
                    <div className={header.wrapper}>
                        <Link to={'/'}>
                            <div className={header.logo}>
                                <img src={english_logo} alt=""/>
                            </div>
                        </Link>


                        <nav className={header.nav} >
                            <ul>
                                <li
                                    onMouseEnter={()=> setShowCourses(true) }


                                    className={header.courses}> Kurslar
                                    {showCourses ?  <ul   onMouseLeave={()=> setShowCourses(false)}>
                                        <span></span>
                                        <li>Beginner</li>
                                        <li>Elementary</li>
                                        <li>Pre-intermediate</li>
                                        <li>Intermediate</li>
                                    </ul>: ""}
                                    <i className="fas fa-chevron-down"></i>
                                </li>
                                <li   onMouseLeave={()=> setShowCourses(false)}>Narxi</li>
                                <li>Biz xaqimizda</li>
                                <li>Bog'lanish</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            
        </div>
    )
}


export default Header