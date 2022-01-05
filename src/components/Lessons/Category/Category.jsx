import React from 'react'
import category from './caategory.module.css'
import Header from "../../Header/Header";
import Component from "../BlockComponents/Component";


function  Category ({number}) {
    const [showComponent, setShowComponent] = React.useState(false)

    const arrComp = [1,2,3,4,5,6,7,8,9,10,11,12]

    return (
       <div className={'container'}>
           <Header/>

           <div

               className={category.categoryBlocks }
               style={showComponent ? {background:"linear-gradient(to bottom, #6713e3, rgb(21, 150, 161))", color:"#fff"} : {}}
           >
                <div onClick={() => setShowComponent(!showComponent)}  className={category.wrapper}>
                    <img src="https://lim-english.com/uploads/images/issues/65.png" alt=""/>
                    <div className={category.infoCategory}>
                        <h3> to be - Present Simple 0{number}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta distinctio eos hic quia quis sed tempore, unde. Eum, nesciunt, omnis.</p>
                    </div>
                    <button><i style={showComponent ? {color:"#fff", transform:"rotate(180deg)"} : {}} className={'fas fa-caret-down'}/></button>
                </div>
               <div
                   style={ showComponent ? {height:"450px", padding:"10px"}: {}}
                   className={category.components}
               >
                   {arrComp.map((item, index) => {
                       return (
                           <Component key={index} learn={"Darslik"} name_learn={`0${index+1}: darslik`}/>
                       )
                   })}
               </div>
           </div>
       </div>
    )
}

export default Category
