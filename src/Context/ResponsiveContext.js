import { createContext, useState } from "react";
const ResponsiveContext = createContext();

export const ResponsiveProvider = ({children}) => {
    const [showMenu, setShowMenu] = useState(false);

    const showMenuFn = () => {
        setShowMenu( prev => !prev);
    } 

    return (
        <ResponsiveContext.Provider
        value={
            {
                showMenuFn,
                showMenu
            }
        }
        >
            {children}
        </ResponsiveContext.Provider>
    )
}

export default ResponsiveContext;