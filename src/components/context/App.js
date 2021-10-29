import { createContext, useState, useEffect } from 'react';
import { assign } from 'utils/object';

const StateInit = {
    filter: {
        page: 1,
        name: ''
    },
    data: [],
    numberPages: 1,
    loading: false
};

const AppContext = createContext([StateInit, () => {}]);

export const AppProvider = (props) => {
    const [state, setState] = useState(StateInit);

    const updateState = (propState) => {
        setState((state) => {
            const newState = {...state};
            assign.recursive(newState, propState);
            return newState;
        });
    }

    return (
        <AppContext.Provider value={[state, updateState]}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppContext;