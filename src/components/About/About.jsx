import React from 'react'
import Header from '../Header/Header'
import about from  './about.module.css'
import {Youtube, Facebook, Instagram, Telegram, Twitter} from './icons/AboutIcons'
export default function About() {
    return (
        <divc  className={about.wrapper}>
            <Header/>
            <div className="container">

                <div className={about.about_block}>
                        <div className={about.title}>
                            <h2>Biz Haqimizda</h2>
                        </div>
                    <div className={about.text}>
                        <div className={about.info}>
                            <h4>English-club haqida ozoroq tushuncha</h4>
                            <p>English-club online dars berish platformasi bo'lib siz bu yerda xar xil turdagi
                                ingliz tili buyicha xizmatlardan foydalanishingiz mumkin va shu urinda siz ingliz
                                tarjimon va xujatlarni ingliz tiliga tarjima qilish yoki ingliz tilidan uzbek rus tilariga tarjima qilishingiz
                                va boshqa turdagi xizmatlardan foydalanishingiz mumkin!
                            </p>
                        </div>
                        <div className={about.social}>

                            <div className={about.icons}>
                                <div >
                                    <img src={Youtube} alt=""/>
                                    <p>Youtube</p>
                                </div>
                                <div>
                                    <img src={Facebook} alt=""/>
                                    <p>FaceBook</p>
                                </div>
                                <div >
                                    <img src={Twitter} alt=""/>
                                    <p>Twitter</p>
                                </div>
                                <div >
                                    <img src={Instagram} alt=""/>
                                    <p>Instagram</p>
                                </div>
                                <div>
                                    <img src={Telegram} alt=""/>
                                    <p>Telegram</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

        </div>
        </divc>
    )
}
