import React from 'react';

export default function Button(props)
{
return(
<div>
    <button
    onClick={props.simpleClick}>
    {props.label}


    </button>
    </div>
);
}