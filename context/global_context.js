import { createContext, useContext } from "react";

const Global_context = createContext()


const useGlobalContext = () => {
    return useContext(Global_context)
}

export default Global_context;
export {
    useGlobalContext
}