import React from "react";

const char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid #ccc',
        backgroundColor: '#6ff'
    }
    return (
        <div style={style} onClick={props.clicked}>
            {props.character}
        </div>
    )
}

export default char;