import React from 'react'
import  './Languages.css'
import {DataLanguages} from '../../constants/Mockup'
// import  Image from "../../../Image/image";
const Languages = () => {
    return (
        <div className="ConatainerLanguage">
            Ngôn ngữ: {DataLanguages.map((item)=>(
                      <div className="Langueage_img">
                            
                           <img src={item.img}/>{item.name}
                      </div>
            )
            )}
        </div>
    )
}

export default Languages
