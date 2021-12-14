import React from 'react'
import header from './header.module.css'


function Header(){

    const [showCourses, setShowCourses] = React.useState(false)


    return(
        <div className={header.header}>
                <div className="container">
                    <div className={header.wrapper}>
                        <div className={header.logo}>
                            <img src="https://seeklogo.com/images/E/english-online-london-logo-058432B891-seeklogo.com.png" alt=""/>
                        </div>


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