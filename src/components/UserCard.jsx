import React from 'react'

const UserCard =(props)=>{
    return(
        
            <div style={{ border: "1px solid #ccc", padding: "10px", width: "250px", borderRadius: "8px" }}>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Location: {props.location}</p>
            </div>
        
    )
};

export default UserCard