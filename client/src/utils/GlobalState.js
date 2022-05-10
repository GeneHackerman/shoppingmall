import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

// this will render a page with info via Provider in return
const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        categories: [],
        currentCategory: '',
    });
    // use this to confirm it works
    console.log(state);
    // without ...props included in Provider return, no page render
    // Provider component makes state available to all components
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };