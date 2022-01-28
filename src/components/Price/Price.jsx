import React from 'react'
import price from './price.module.css'
import Basic from './icons/telegram.png'
import Standart from './icons/flying-airplane.png'
import Premium from './icons/shuttle.png'
import Checked from './icons/check.png'
import Close from './icons/close.png'
import Header from '../Header/Header'
import {useSpring, animated}  from 'react-spring'
export default function Price() {

    const left = useSpring({
        from:{y: -1000, opacity:0},
        to:{y: 0, opacity:1},
        delay:100,
       
        
    })
    const center = useSpring({
        from:{ opacity:0},
        to:{opacity:1},
        delay:400,
      
        
    })



    const right = useSpring({
        from:{x: 1000, opacity:0},
        to:{x: 0, opacity:1},
        delay:100,
        
    })

    return (
        <div className={price.wrapper}>
            <Header/>
            <div className="container">
                <div className={price.price_container}>
                    <animated.div style={left} className={price.price_block}>
                            <div className={price.price_photo}>
                                <img src={Basic} alt="" />
                            </div>
                            <h3>Basic</h3>
                            <p><sup>$</sup>25</p>
                            <ul>
                                <li>
                                    <img src={Checked} alt="" />
                                    Onlayn darslar</li>
                                <li>
                                    <img src={Checked} alt="" />
                                    10000 ortiq ingliz so'zlar</li>
                                <li>
                                    <img src={Close} alt="" />
                                    Qiziqarli darslar</li>
                                <li>
                                    <img src={Close} alt="" />
                                    Savolorga online javob</li>
                                <li>
                                    <img src={Close} alt="" />
                                    O'qtuvchi bilan suxbat</li>
                            </ul>
                            <button>Sotib olish</button>
                    </animated.div>
                    <animated.div style={center} className={price.price_block}>
                            <div className={price.price_photo}>
                                <img src={Standart} alt="" />
                            </div>
                            <h3>Standart</h3>
                            <p><sup>$</sup>50</p>
                            <ul>
                                <li>
                                    <img src={Checked} alt="" />
                                    Onlayn darslar</li>
                                <li>
                                    <img src={Checked} alt="" />
                                    10000 ortiq ingliz so'zlar</li>
                                <li>
                                    <img src={Checked} alt="" />
                                    Qiziqarli darslar</li>
                                <li>
                                    <img src={Checked} alt="" />
                                    Savolorga online javob</li>
                                <li>
                                    <img src={Close} alt="" />
                                    O'qtuvchi bilan suxbat</li>
                            </ul>
                            <button>Sotib olish</button>
                    </animated.div>
                    <animated.div style={right} className={price.price_block}>
                            <div className={price.price_photo}>
                                <img src={Premium} alt="" />
                            </div>
                            <h3>Premium</h3>
                            <p><sup>$</sup>100</p>
                            <ul>
                                <li>
                                    <img src={Checked} alt="" />
                                    Onlayn darslar</li>
                                <li>
                                    <img src={Checked} alt="" />
                                    10000 ortiq ingliz so'zlar</li>
                                <li>
                                    <img src={Checked} alt="" />
                                    Qiziqarli darslar</li>
                                <li>
                                    <img src={Checked} alt="" />
                                    Savolorga online javob</li>
                                <li>
                                    <img src={Checked} alt="" />
                                    O'qtuvchi bilan suxbat</li>
                            </ul>
                            <button>Sotib olish</button>
                    </animated.div>

                </div>
                
            </div>
            <footer className={price.footer}>

            </footer>
        </div>
    )
}
