import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header/Header'
import videoStyle from './style.module.css'
export default function AudioLessons() {

    let chechedWord = React.useRef('')
    const [words, setWords] = React.useState([])
    const [text, setText] = React.useState([])

    React.useEffect(() => {
        let word = 'I love you my baby';
        setWords(word.split(' '))
    }, [])




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
        if(text.length >= words.length){
            if(words.join(' ') === text.join(' ')){
               
            }
           
        }

    let arr = [];

    React.useEffect(() => {
        for (let i = 0; i < words.length; i++) {
            arr.push(i);
            shuffle(arr);
            
        }
        
    }, [words])




    function getWords(e) {
        setText([...text, e])
        
       
    }

    function chechText(e){
        
    }


    return (
        <>
            <Header />
            <div className='container'>

                <div className={videoStyle.videoContent}>
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
                    <div className={videoStyle.audioBlock}>
                        <h3>I love you  my baby</h3>
                        <div 
                        ref={chechedWord}
                        onInput={() => chechText()}
                        suppressContentEditableWarning
                        contentEditable
                        spellCheck={false} 
                        className={videoStyle.wordText}>

                            {text.map(item => {
                                return <span className={text.join(' ') === words.join(' ') ? videoStyle.full : ""} key={item}>{item}</span>
                            })}
                        </div>
                        <div className={videoStyle.word}>
                            {words.map(item => {
                                return <span onClick={() => getWords(item)} key={item}>{item}</span>
                            })}
                        </div>
                    </div>

                    <div className={videoStyle.button}>
                        <Link to={'/imageLesson'}>
                            <button>Next</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
