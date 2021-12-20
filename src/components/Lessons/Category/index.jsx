import  React from "react"
import Category from "./Category";


function BegCategory({text}){
    const categoryNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    return(
        <div className={"beginner"}>
            <h1 style={{textAlign:"left", padding:"20px", marginTop:"80px"}}>{text}</h1>
            {categoryNum.map((item, index) =>{
                return (
                    <Category number={index+1}/>
                )
            })}
        </div>
    )
}


export default BegCategory