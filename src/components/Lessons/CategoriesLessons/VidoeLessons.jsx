import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header/Header'
import videoStyle from './style.module.css'
export default function VidoeLessons() {

    const durationVideo = React.useRef('')
    const [isPlayVideoContent, setIsPlayVideoContent] = React.useState(false)
    const [isPlayDuration, setIsPlayDuration] = React.useState(false)

    

    return (

        <>
            <Header />
            <div className='container'>

                <div className={videoStyle.videoContent}>
                    <div className={videoStyle.title}>
                        <Link  to={'/videoLesson'}>
                            {true ? <h2 className={videoStyle.active}>Video</h2> :   <h2>Video</h2>}
                        </Link>
                        <Link to={'/audioLesson'}>
                            <h2>Audio</h2>
                        </Link>
                        <Link to={'/imageLesson'}>
                            <h2>Image</h2>
                        </Link>
                       <Link to={'/robotLesson'}>
                         <h2>Robot</h2>
                       </Link>
                    </div>
                    <div className={videoStyle.videoPlayer}>
                        {

                            isPlayVideoContent ?
                                <video ref={durationVideo}
                                    poster='https://lim-english.com/uploads/images/all/video/videoscreen_ver4.png'
                                    src={'https://lim-english.com/uploads/images/all/video/319.mp4'}
                                    controls
                                    onEnded={() => setIsPlayDuration(true)}
                                >

                                </video> :
                                <video ref={durationVideo}
                                    poster='https://lim-english.com/uploads/images/all/video/videoscreen_ver4.png'
                                    src={'https://lim-english.com/uploads/images/all/video/319.mp4'}
                                    onClick={() => setIsPlayVideoContent(true)}
                                    onEnded={() => setIsPlayDuration(true)}
                                >

                                </video>

                        }
                    </div>
                    <div className={isPlayDuration ? videoStyle.buttonActive : videoStyle.button}>
                        <Link to={'/audioLesson'}>
                            <button className={videoStyle.btn}>Next</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
