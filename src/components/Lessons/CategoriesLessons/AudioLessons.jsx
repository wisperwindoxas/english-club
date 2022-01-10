import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header/Header'

import Error from './error.mp3'

import videoStyle from './style.module.css'


const questions = [
    {
        questionText: 'I love you my baby',

    },
    {
        questionText: 'You need more info',
        
    },
    {
        questionText: 'This my friend',
       
    },
    {
        questionText: 'My hobbies play computer games',
        
    }
];

export default function AudioLessons() {



    let playEror = React.useRef('')
    const [words, setWords] = React.useState([])
    const [text, setText] = React.useState([])
    const [endTest, setEndTest] = React.useState(false)
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [showScore, setShowScore] = React.useState(false);
    const [score, setScore] = React.useState(0);

    let word = questions[currentQuestion].questionText

    React.useEffect(() =>{

            setWords(word.split(' '))
  
        
        const nextQuestion = currentQuestion
        
        if (nextQuestion >= questions.length) {
            setShowScore(true);
            setEndTest(true)
        }
        // eslint-disable-next-line
    },[word, text])

    function shuffle(array) {
        let currentIndex = array.length
        let temporaryValue;
        let randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }


    }




    let arr = [];

    React.useEffect(() => {

        function getRandomNumber() {
            for (let i = 0; i < words.length; i++) {
                arr.push(i);
                shuffle(arr);

            }
        }
        return getRandomNumber
        // eslint-disable-next-line
    },[])



    function getWordsItem(e) {
        

    }


    function checkText(e) {
        if (e.target.innerText === words.join(' ')) {
            setCurrentQuestion(currentQuestion + 1)
            e.target.innerText = " "
            

        } else {
            e.target.style.color = 'white'
        }



    }

    function setWordsItem(items, e) {
        setText([...text, items])
        e.target.style.pointerEvents = 'none'
        e.target.style.opacity = '0.5'
        if (words.join(' ') === text.join(' ')) {
            setScore(score + 1);
           
        }

    }

    return (
        <>
            <Header />
            <div className='container'>
                <audio ref={playEror} src={Error} />
                <div className={videoStyle.videoContent}>
                    {/* Title component top */}
                    <div className={videoStyle.title}>
                        <Link to={'/videoLesson'}>
                            {false ? <h2 className={videoStyle.active}>Video</h2> : <h2>Video</h2>}
                        </Link>
                        <Link to={'/audioLesson'}>
                            {true ? <h2 className={videoStyle.active}>Audio</h2> : <h2>Audio</h2>}

                        </Link>
                        <Link to={'/imageLesson'}>
                            {false ? <h2 className={videoStyle.active}>Image</h2> : <h2>Image</h2>}

                        </Link>
                        <Link to={'/robotLesson'}>
                            {false ? <h2 className={videoStyle.active}>Robot</h2> : <h2>Robot</h2>}

                        </Link>
                    </div>
                    {/* Title component top end */}

                    <div className={videoStyle.audioBlock}>
                        <h3>{questions[currentQuestion].questionText}</h3>
                        {showScore ? (
                            <div className='score-section'>
                                You scored {score} out of {questions.length}

                            </div>

                        ) : (
                            <>
                                <div className='question-section'>
                                    <div className='question-count'>
                                        <span>Question {currentQuestion + 1}</span>/{questions.length}
                                    </div>
                                    <div
                                        onInput={(e) => checkText(e)}
                                        suppressContentEditableWarning
                                        contentEditable

                                        spellCheck={false}
                                        className={videoStyle.wordText}>

                                        {text.map(item => {
                                            return <span
                                                onClick={(e) => {
                                                    getWordsItem(e)

                                                }}

                                                key={item}>{item}
                                            </span>
                                        })}
                                    </div>
                                </div>
                                <div className='answer-section'>
                                    <div className={videoStyle.word}>

                                        {words.map(item => {
                                            return <span
                                                onClick={(e) => {
                                                    setWordsItem(item, e)
                                                }}
                                                onInput={(event) => getWordsItem(event)}
                                                key={item}>{item}
                                            </span>
                                        })}
                                    </div>
                                </div>
                            </>
                        )}





                    </div>

                    <div className={endTest ? videoStyle.buttonActive : videoStyle.button}>
                        <Link to={'/imageLesson'}>
                            <button>Next</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}



