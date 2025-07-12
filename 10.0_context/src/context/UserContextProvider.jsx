import React from "react";

import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{   // children is the placeholder, aage jaake isme componnents ayenge

    const [user , setUser] = React.useState(null)   // this is the data which will be accessed by the children components
    return(
        <UserContext.Provider value={{user ,setUser}}>
        {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider    // ab isey app.jsx me ya kahin bhi use kr skte hai 