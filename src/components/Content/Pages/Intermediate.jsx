import React from 'react'
import pagesStyle from './pages.module.css'
import Card from "../Card";
import {Link} from "react-router-dom";


function  Intermediate () {
    return(
        <div  className={pagesStyle.start}>
            <h1>Intermediate</h1>
            <div className={pagesStyle.cards}>
                <Link to={'intermediate'}>
                <Card
                    urlImg={'https://lim-english.com/uploads/images/courses/15.png'}
                    title={"Boshlang'ich Beginner"}
                    subscribe={"Boshlang'ichga tegishli darsliklar"}
                    pageInfo={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolores ex non officia provident qui, quos soluta veritatis voluptate voluptatibus? Ab amet aut blanditiis iste laudantium optio placeat rem ullam."}
                />
                </Link>
                <Card
                    urlImg={'https://sparc.org.in/wp-content/uploads/2018/12/english-speaking-course-in-gtb-nagar-sparc-academy.png'}
                    title={"Gapirishni O'rganing"}
                    subscribe={"Ingliz tilidagi gapirish gramatikasini boshlang"}
                    pageInfo={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolores ex non officia provident qui, quos soluta veritatis voluptate voluptatibus? Ab amet aut blanditiis iste laudantium optio placeat rem ullam. "}

                />
                <Card
                    urlImg={'https://lim-english.com/uploads/images/courses/16.png'}
                    title={"Xarf va so'zlar"}
                    subscribe={"siz bu yerda xarflardan  so'zlar va gaplar tuzish o'rganasiz "}
                    pageInfo={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolores ex non officia provident qui, quos soluta veritatis voluptate voluptatibus? Ab amet aut blanditiis iste laudantium optio placeat rem ullam.'}
                />
                <Card
                    urlImg={'https://lim-english.com/uploads/images/courses/40.png'}
                    title={"Eshitish orqali so'zlar tuzish"}
                    subscribe={"siz bu yerda xarflardan  so'zlar va gaplar tuzish o'rganasiz "}
                    pageInfo={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolores ex non officia provident qui, quos soluta veritatis voluptate voluptatibus? Ab amet aut blanditiis iste laudantium optio placeat rem ullam.'}
                />
            </div>

        </div>
    )
}

export default Intermediate