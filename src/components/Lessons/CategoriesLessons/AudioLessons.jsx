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
    const [scoreResult, setScoreResult] = React.useState(0);
    const numberResult = React.useRef(null)



    let word = questions[currentQuestion].questionText

    React.useEffect(() =>{
            setWords(word.split(' '))

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




    let randomNumber = [];

   

    React.useMemo(() => {
            for (let i = 0; i < words.length; i++) {
                randomNumber.push(i);
                shuffle(randomNumber);

            }
        // eslint-disable-next-line
    },[words])


    function getWordsItem(e) {
            e.target.style.display = 'none'

    }


    function checkText(e) {

        const resultScore = Math.ceil(100 / questions.length)
        setScoreResult(resultScore)

        if (e.target.innerText === words.join(' ')) {
            e.target.innerText = " "
            setScore(score + 1)

            const nextQuestion = currentQuestion + 1
            if (nextQuestion >= questions.length) {
                setShowScore(true);
                setEndTest(true)
            }else{
                setCurrentQuestion(nextQuestion)
            }
        } else {
            e.target.style.color = 'white'
        }



    }


    React.useEffect(() => {
        document.querySelector(':root').style.setProperty(`--counter`, `${471-471 * scoreResult * score / 100}`)
    }, [score, scoreResult])

  

    function setWordsItem(items, e) {
        setText([...text, items])
        e.target.style.pointerEvents = 'none'
        e.target.style.opacity = '0.5'
       
        
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
                        <h3>{endTest ? "": questions[currentQuestion].questionText}</h3>
                        {showScore ? (
                             <div className="skill">
                             <div className="outer">
                                 <div className="inner">
                                     <div ref={numberResult} id="number">
                                         {scoreResult * score} 
                                     </div>
                                 </div>
                             </div>


                             <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                 <defs>
                                     <linearGradient id="GradientColor">
                                         <stop offset="0%" stopColor="#e91e63" />
                                         <stop offset="100%" stopColor="#673ab7" />
                                     </linearGradient>
                                 </defs>
                                 <circle cx="80" cy="80" r="70" strokeLinecap="round"  />
                             </svg>

                         </div>

                        ) : (
                            <>
                                <div className='question-section'>
                                    <div className='question-count'>
                                        {questions.map((item, index) => {
                                            return <span className={index === currentQuestion ? 'answer_progressActive': ""}></span>
                                        })}
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

                                        {randomNumber.map(item => {
                                            return <span
                                                onClick={(e) => {
                                                    setWordsItem(words[item], e)
                                                }}
                                                onInput={(event) => getWordsItem(event)}
                                                key={item}>{words[item]}
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



