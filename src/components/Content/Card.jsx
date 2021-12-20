import React from 'react'
import pagesStyle from './Pages/pages.module.css'


function  Card ({urlImg, title, subscribe, pageInfo }) {
    const [showCardInfo, setShowCardInfo] = React.useState(false)

    return(
        <div

            onMouseEnter={() => setShowCardInfo(true)}
            onMouseLeave={() => setShowCardInfo(false)}
            className={pagesStyle.card}

        >
           <div style={showCardInfo ? {opacity: "0.3"}: {opacity: "1"}}>
               <div className={pagesStyle.image}>
                   <img src={urlImg} alt=""/>
               </div>
               <h3>{title}</h3>
               <p>{subscribe}</p>
           </div>

                <div style={showCardInfo ? {transform:"translateY(0%)",opacity:"1"} : {transform: "translateY(-110%)"} }
                    className={pagesStyle.cardInfo}>
                <p>{pageInfo}</p>
                <button>Darsni boshlash</button>
            </div>
        </div>
    )
}

export default Card