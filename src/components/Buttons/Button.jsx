import React from 'react'
import "../Buttons/button.css"

const Button = ({ text, onClick, style }) => {


   
    return (
        <div className='container-button'>
            <button onClick={onClick}
                style={style}
                >{text}</button>
        </div>
    )
}

export default Button