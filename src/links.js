import React from 'react';
import Button from './button';

function Links ()
{
return(
<div>
<Button simpleClick={()=>{window.location="https://www.youtube.com/"}}
    label="you tube">

</Button>
<Button simpleClick={()=>{window.location="https://www.facebook.com/"}}
    label="facebook">

</Button>
</div>
);
}
export default Links ;