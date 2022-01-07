import React from 'react'
import header from './header.module.css'
import english_logo from './icons/english_logo.png'
import {Link} from 'react-router-dom'
import {
    Beginner,
    Elementary,
    Pre_intermediate,
    Intermediate,
    Courses,
    Price,
    About,
    Contact
} from './icons/Icon'
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
                                <Link to="/menu">
                                <li
                                    onMouseEnter={()=> setShowCourses(true) }


                                    className={header.courses}>
                                        <img src={Courses} alt="" />
                                         Kurslar
                                    {showCourses ?  <ul   onMouseLeave={()=> setShowCourses(false)}>
                                        <span></span>
                                       <Link to="/beginner">
                                        <li>
                                            <img src={Beginner} alt="" />
                                            Beginner
                                            </li>
                                       </Link>
                                        <Link to="/elementary">
                                             <li>
                                            <img src={Elementary} alt="" />
                                            Elementary
                                            </li>
                                        </Link>
                                        <Link to="/pre-intermediate">
                                        <li>
                                            <img src={Pre_intermediate} alt="" />
                                            Pre-intermediate
                                            </li>
                                        </Link>
                                        <Link to="/intermediate">
                                        <li>
                                            <img src={Intermediate} alt="" />
                                            Intermediate
                                            </li>
                                        </Link>
                                    </ul>: ""}
                                    <i className="fas fa-chevron-down"></i>
                                </li>
                                </Link>
                                <Link to="/price">
                                 <li   onMouseLeave={()=> setShowCourses(false)}>
                                    <img src={Price} alt="" />
                                    Narxi
                                    </li>
                                </Link>
                                <Link to="/about">
                                <li>
                                    <img src={About} alt="" />
                                    Biz xaqimizda
                                    </li>
                                </Link>
                                <Link to="/contact">
                                <li>
                                    <img src={Contact} alt="" />
                                    Bog'lanish
                                    </li>
                                </Link>
                            </ul>
                        </nav>
                    </div>
                </div>
            
        </div>
    )
}


export default Header