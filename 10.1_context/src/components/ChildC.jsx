import React, { useContext } from "react";
import { UserContext, ThemeContext } from "../App";

function ChildC() {

    const user = useContext(UserContext)
    const { theme, setTheme } = useContext(ThemeContext)

    function handleClick(){
        if(theme==="light")
            {
            setTheme("dark")
        }
        else{
            setTheme("light")
        }
    }

    return (
        <div>
            <button onClick={handleClick}> Change Theme
                 <br/>
                    Hello , {user.name}
            </button>
        </div>
    )
}

export default ChildC