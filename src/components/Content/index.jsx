import React from 'react'

import Beginner from "./Pages/Beginner";
import Elementary from "./Pages/Elementary";
import PreIntermediate from "./Pages/PreIntermediate";
import Intermediate from "./Pages/Intermediate";



function Pages () {
        return (
            <div className={"container"}>

                <Beginner/>
                <Elementary/>
                <PreIntermediate/>
                <Intermediate/>


            </div>
        )
}


export default Pages
