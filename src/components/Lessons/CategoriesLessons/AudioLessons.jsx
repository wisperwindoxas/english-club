import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header/Header'

import Error from './error.mp3'

import videoStyle from './style.module.css'
export default function AudioLessons({name}) {

    let checkedWord = React.useRef('')
    let playEror = React.useRef('')
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
        
      function getRandomNumber(){
        for (let i = 0; i < words.length; i++) {
            arr.push(i);
            shuffle(arr);
            
        }
      }
      return getRandomNumber
        // eslint-disable-next-line
    }, [arr])


    function getChangeWords (e){
        console.log(e);
    }
   

    function getWordsItem (e) {
        e.target.style.display = 'none'
        
    }

    function checkText(e){
        if(e.target.innerText === words.join(' ') || e.target.innerText === words.join('')){
            e.target.style.color = 'green'
        }else{
         e.target.style.color = 'white'
        }
        
        ;
     }

    function setWordsItem(items, e) {
        setText([...text, items])
        e.target.style.pointerEvents = 'none'
        e.target.style.opacity = '0.5'

        let searchIndex = words.findIndex(i => i === items)
        console.log(searchIndex);
        if(items !== words[searchIndex]){
            console.log('errror');
        }
        
  
    }




    return (
        <>
            <Header />
            <div className='container'>
                <audio ref={playEror} src={Error}/>
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
                        <h3>I love you  my baby</h3>
                        <div 
                        ref={checkedWord}
                        onInput={(e) => checkText(e)}
                        suppressContentEditableWarning
                        contentEditable
                        spellCheck={false} 
                        className={videoStyle.wordText}>

                            {text.map(item => {
                                return <span 
                                onClick={(e) => {
                                    getWordsItem(e)
                                    // getChangeWords(e)
                                }}
                                 key={item}>{item}
                                 </span>
                            })}
                        </div>
                        <div className={videoStyle.word}>
                        {name}
                            {words.map(item => {
                                return <span 
                                onChange={(e) => getChangeWords(e)}
                                onClick={(e) => setWordsItem(item, e)} 
                                key={item}>{item}
                                </span>
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
