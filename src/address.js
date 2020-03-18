import React from 'react'

const address=(props)=>{
 return (<div>
    {/* <p>{city}</p>
    <p>{zip}</p> */}
    <p>{props.city}</p>
    <p>{props.zip}</p>
 </div>);
}
export default address;