import { createContext } from "react";
const ResponsiveContext = createContext();

export const ResponsiveProvider = ({children}) => {


    return (
        <ResponsiveContext.Provider

        >
            {children}
        </ResponsiveContext.Provider>
    )
}

export default ResponsiveContext;