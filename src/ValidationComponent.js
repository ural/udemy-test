import React from 'react';

const validationMessage = ( props ) => {

    let message = "";

    if (props.str_length <= 5 ) {
        message = "The text is too short";
    } else if (props.str_length >= 10) {
        message = "The text is too LONG";
    }

    return (

        <div>
            {message}
        </div>
    );
};

export default validationMessage;
