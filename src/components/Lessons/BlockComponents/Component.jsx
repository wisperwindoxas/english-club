import React from 'react'
import component from './component.module.css'
import {Link} from 'react-router-dom'



function Component ({learn, name_learn}){

    function getInfo(){
       
            
        
    }

    getInfo()
    return (
        <div className={component.component}>
            <div className={component.active}>
                <i className="fas fa-location-arrow"/>
            </div>
            <div className={component.level}>

                <h3>{learn}</h3>
                <p>{name_learn}</p>
                <Link to="/videoLesson">
                    <button>Boshlomoq <i className="fas fa-long-arrow-alt-right"/></button>
                   
                </Link>
               
            </div>
        </div>
    )
}


export default  Component