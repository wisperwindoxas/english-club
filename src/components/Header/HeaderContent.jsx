import React from 'react'
import content from './content.module.css'
import Speak from './icons/do you speak.png'
function HeaderContent () {

    const [showVideo, setShowVideo] = React.useState(false)
    const [videoUrl, setVideoUrl] = React.useState()

    function onShowVideo() {
        setVideoUrl('https://www.youtube.com/embed/WFRR0zC70-0')
        setShowVideo(true)
    }

   function onCloseVideo(){
    setVideoUrl('')
    setShowVideo(false)
    }

    return(
        <div className={content.content}>
            <div onClick={() =>  onCloseVideo() } className={showVideo ? content.show_video_player: content.video}>
                <div className={content.video_block}>
                <iframe id="iframe" width="100%" height="100%"  src={videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
                </div>
                </div>
            <div className={content.center}>
                <h1>Ingliz tili online o'rganing</h1>
                <p>Biz bilan Ingliz tilida gapirganigizni sezmay qolasiz</p>
                <img src={Speak} alt="" />
                
                <button onClick={() => onShowVideo()} className={content.showVideo}>
                <i className="far fa-play-circle"/>
                    Qisqacha Darslikini Ko'rish
                    </button>
            </div>
           
        </div>
    )
}


export default HeaderContent