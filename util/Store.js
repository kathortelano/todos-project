import { useReducer, useContext, createContext } from "react";
import Reducer from "./Reducers";

const initialState = {
    dark: false
}

const Store = createContext(initialState);

export const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
    );
};

// export { Store, StateProvider, actions };

export const useStore = () => useContext(Store);
