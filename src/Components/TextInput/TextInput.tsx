import React from 'react'
import  './TextInput.css'

interface PropInput{
    type?:string,
    placeholder?:string,
    EyePass?:string,
    EyeShowPass?:string,
    ShowPass?:boolean,
    onchange?:()=>void
}
const TextInput = (props:PropInput) => {
    const {type,placeholder,EyePass,ShowPass,EyeShowPass,onchange}=props
    return (
        <div className="Input">
            <input
            type={type}
            placeholder={placeholder}
            className="Input-Text"
            />
            <span className={ShowPass?EyePass:EyeShowPass} onClick={onchange}></span>
        </div>
    )
}

export default TextInput;
