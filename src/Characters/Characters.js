import React from 'react';

const Characters = ( props ) => {

    const style = {
        display: 'inline-block',
        margin: '12px',
        border: '1px solid black',
        textAlign: 'center'
    };

    return (
        <span className="chars_to_play" style={style} onClick={props.charClicked} >
            {props.character}
        </span>
    );

};

export default Characters;

