import React from 'react'
import component from './component.module.css'


function Component ({learn, name_learn}){
    return (
        <div className={component.component}>
            <div className={component.active}>
                <i className="fas fa-location-arrow"/>
            </div>
            <div className={component.level}>
                <h3>{learn}</h3>
                <p>{name_learn}</p>
                <button>Boshlomoq <i className="fas fa-long-arrow-alt-right"/></button>
            </div>
        </div>
    )
}


export default  Component