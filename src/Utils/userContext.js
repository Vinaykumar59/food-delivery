import { useContext, createContext } from "react";

// useContext is a hook which is used to overcome pop-drilling. 
// Using  context, we can store data and use it anywhere in the app
export  const user = createContext({
    loggedInUser : "Default User"
})

