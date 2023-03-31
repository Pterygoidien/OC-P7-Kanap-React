import { useReducer, useContext } from "react";


export const useLogements = () => {
    const { state, dispatch } = useContext(LogementContext);
    return [state, dispatch];
}

export const getLogements = async (dispatch) => {
    try {
        const res = await fetch('/assets/logements.json');
        const data = await res.json();
        dispatch({ type: 'GET_LOGEMENTS', payload: data });
    }
    catch (error) {
        console.log(error);
    }
}

const LogementState = (props) => {
    const initialState = {
        logements: [],
        logement: null,
    };

    const [state, dispatch] = useReducer(logementReducer, initialState);
    return (
        <LogementContext.Provider value={{ state, dispatch }}>
            {props.children}
        </LogementContext.Provider>
    );
};
export default LogementState;