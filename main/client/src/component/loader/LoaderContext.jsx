import React, { createContext, useReducer } from 'react';


const initialState = {
    status: "d-none"
};


export const SHOW = '';
export const HIDE = 'd-none';


const loaderReducer = (state, action) => {
    switch(action.type) {
        case SHOW:
            return { status:''};
        case HIDE:
            return { status:'d-none' };
        default:
            return state;
    }
};


export const LoaderContext = createContext();



export const LoaderProvider = ({ children }) => {
    const [state, dispatch] = useReducer(loaderReducer, initialState);

    return (
        <LoaderContext.Provider value={{ state, dispatch }}>
            {children}
        </LoaderContext.Provider>
    );
};



