import React from 'react';
import './CoolButton.css'

const allPossibleClasses = {

}

function CoolButton(props) {
    return (
        <button className={props.className} class={props.class}>{props.name}</button>
    )
}

export default CoolButton;