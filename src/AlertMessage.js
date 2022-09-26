import React from 'react';

const AlertMessage = (props) => {
    return (
        <div>
            {props.alert && (<div className={'alert '+ props.alert.type}>{props.alert.message}</div>)} 
        </div>
    );
};

export default AlertMessage;