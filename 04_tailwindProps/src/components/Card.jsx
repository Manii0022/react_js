import React from "react";

function Card({username="anonymous  "}){        // anonymous is the default value, if not given any
    console.log(username);  
    
    return(
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black-300">
        <img
          src="https://www.devui.in/pc_guy.png"
          alt=""
          className="object-cover object-center w-full rounded-md h-75 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
        </div>
        <p className="text-gray-300">
          {username} dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>

    )
}

export default Card