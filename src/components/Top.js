import React from 'react';
import '../css/Top.scss';

function Top(props) {
    return (
        <div className='top-container'>
            {props.instruction}
        </div>
    )
}

export default Top;
