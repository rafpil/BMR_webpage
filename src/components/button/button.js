import React from 'react'

import "./button.scss";

function Button(props) {
    return (
        <button type={props.type} 
                className={`btn-orange ${props.extraClass}`} 
                onClick={props.onClick}
                aria-label="props.aria-label"
        >
            {props.children}
        </button>
    )
}

export default Button