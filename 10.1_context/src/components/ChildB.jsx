import React, { useContext } from "react";
import ChildC from "./childC";
import { UserContext, PageContext } from "../App";


function ChildB() {

    const user = useContext(UserContext)
    const { page, setPage } = useContext(PageContext)

    function handleClick() {
        if (page === "light") {
            document.querySelector("html").classList.remove("light", "dark")
            document.querySelector("html").classList.add("dark")
            setPage("dark")
        }
        else {
            document.querySelector("html").classList.remove("light", "dark")
            document.querySelector("html").classList.add("light")
            setPage("light")
        }

    }
    return (

        <div>
            <button onClick={handleClick}> Change Page theme
                <br />
                Hello , {user.name} , Click the button
            </button>
        </div>
    )
}

export default ChildB