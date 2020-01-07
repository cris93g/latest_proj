import React from "react"

const InfoBar=()=>{
    <div>
        <div>
            <img  className="onlineIcon"src={onlineIcon}/>
            <h3>roomNaME</h3>
        </div>
        <div>
            <a href="/"><img src={closeIcon}/></a>
        </div>
    </div>
}
export default InfoBar