import React, { useState } from 'react';
import Header from '../../Header/Header';
import videoStyle from './style.module.css'
import { Link } from 'react-router-dom'
export default function ImageLessons() {
    const questions = [
        {
            questionImg: 'https://cdn3.iconfinder.com/data/icons/back-to-school-6/512/APPLE.png',
            answerOptions: [
                { answerText: 'apple', isCorrect: true },
                { answerText: 'melon', isCorrect: false },
                { answerText: 'watemelon', isCorrect: false },
                { answerText: 'orange', isCorrect: false },
            ],
        },
        {
            questionImg: 'https://avatars.mds.yandex.net/get-zen_doc/1898210/pub_5ee1ded0df721c0d7a24b2df_5ee1dfb1592e1e70f8d39ee2/scale_1200',
            answerOptions: [
                { answerText: 'Red', isCorrect: false },
                { answerText: 'Green', isCorrect: true },
                { answerText: 'Blue', isCorrect: false },
                { answerText: 'Black', isCorrect: false },
            ],
        },
        {
            questionImg: 'https://img2.freepng.ru/20180910/gtk/kisspng-clip-art-transportation-bicycle-portable-network-red-flat-icon-ride-cartoon-bikes-cycle-bike-5b96cb0b273938.4580382815366090351607.jpg',
            answerOptions: [
                { answerText: 'motorcycle ', isCorrect: false },
                { answerText: 'car', isCorrect: false },
                { answerText: 'bicycle', isCorrect: true },
                { answerText: 'air plane', isCorrect: false },
            ],
        },
        {
            questionImg: 'https://i.pinimg.com/originals/ee/ae/23/eeae23049a5afa038b8405e864a1ad52.png',
            answerOptions: [
                { answerText: 'air', isCorrect: false },
                { answerText: 'helicopter', isCorrect: false },
                { answerText: 'bicycle', isCorrect: false },
                { answerText: 'a car', isCorrect: true },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };



    return (
        <>
            <Header />
            <div className='container' >
                <div className={videoStyle.videoContent}>
                    <div className={videoStyle.title}>
                        <Link to={'/videoLesson'}>
                            {false ? <h2 className={videoStyle.active}>Video</h2> : <h2>Video</h2>}
                        </Link>
                        <Link to={'/audioLesson'}>
                            {false ? <h2 className={videoStyle.active}>Audio</h2> : <h2>Audio</h2>}

                        </Link>
                        <Link to={'/imageLesson'}>
                            {true ? <h2 className={videoStyle.active}>Image</h2> : <h2>Image</h2>}

                        </Link>
                        <Link to={'/robotLesson'}>
                            {false ? <h2 className={videoStyle.active}>Robot</h2> : <h2>Robot</h2>}

                        </Link>

                    </div>
                    <div className='app'>
                        {showScore ? (
                            <div className='score-section'>
                                You scored {score} out of {questions.length}

                            </div>

                        ) : (
                            <>
                                <div className='question-section'>
                                   
                                    <div className='question-img'>
                                        <img src={questions[currentQuestion].questionImg} alt="img" />
                                    </div>
                                </div>
                                <div className='answer-section'>
                                    {questions[currentQuestion].answerOptions.map((answerOption) => (
                                        <button className='answerBtn' key={answerOption.answerText} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
