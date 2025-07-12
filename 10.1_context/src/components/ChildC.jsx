import React, { useContext } from "react";
import { UserContext } from "../App";

function ChildC(){

    const user = useContext(UserContext)
    return(
        <div>
            <h1>Hello {user.name}, learning Contexts</h1>

            
        </div>
    )
}

export default ChildC