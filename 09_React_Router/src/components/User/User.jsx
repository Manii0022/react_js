import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userId} = useParams()
    return (
        <div className='bg-amber-600 text-center text-3xl py-4'>User : {userId}</div>
    )
}

export default User