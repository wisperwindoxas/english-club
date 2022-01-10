import React from 'react'
import SpeechRecognition, {useSpeechRecognition } from 'react-speech-recognition';
import { Link } from 'react-router-dom'
import Header from '../../Header/Header'
import videoStyle from './style.module.css'

export default function RobotLessons() {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();
    
      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
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
                            {false ? <h2 className={videoStyle.active}>Audio</h2> : <h2>Audio</h2>}

                        </Link>
                        <Link to={'/imageLesson'}>
                            {false ? <h2 className={videoStyle.active}>Image</h2> : <h2>Image</h2>}

                        </Link>
                        <Link to={'/robotLesson'}>
                            {true ? <h2 className={videoStyle.active}>Robot</h2> : <h2>Robot</h2>}

                        </Link>
                    </div>
                    <div className={videoStyle.videoPlayer}>
                    <div>
                            <p>Microphone: {listening ? 'on' : 'off'}</p>
                            <button onClick={SpeechRecognition.startListening}>Start</button>
                            <button onClick={SpeechRecognition.stopListening}>Stop</button>
                            <button onClick={resetTranscript}>Reset</button>
                            <p>{transcript}</p>
                            </div>
                    </div>
                    <div className={videoStyle.button}>
                        <Link to={'/videoLesson'}>
                            <button>End</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
