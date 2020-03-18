import React from 'react'

const List = ({list})=>{
    return (
        <ul>
            {
                list.map((value,i)=>
                <li key={i}>{value}</li>
                )
            }
            
        </ul>
    )
}

export const AppName=({name,title=''})=>{
    return(<h1>{name}</h1>)
}

export default List;