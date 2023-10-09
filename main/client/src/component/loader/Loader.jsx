import React, {useContext} from 'react';
import {LoaderContext} from "./LoaderContext.jsx";

const Loader = () => {
    const { state, dispatch } = useContext(LoaderContext);

    return (
        <div>

            <div className="spinner-wrapper">
                <p>Count: {state.status}</p>
                <div className="spinner-border text-success" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        </div>
    );
};

export default Loader;