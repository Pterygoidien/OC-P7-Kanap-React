import { useReducer, useContext } from "react";
import LogementContext from "./logementContext";
import logementReducer from "./logementReducer";

const LogementState = (props) => {
    const initialState = {
        logements: [],
        logement: null,
    };

    const [state, dispatch] = useReducer(logementReducer, initialState);

    const getLogements = async () => {
        try {
            const res = await fetch('/assets/logements.json');
            const data = await res.json();
            dispatch({ type: 'GET_LOGEMENTS', payload: data });
        }
        catch (error) {
            console.log(error);
        }
    }
    const getLogement = async (id) => {
        try {
            const res = await fetch(`/assets/logements.json`);
            const data = await res.json();
            const logement = data.find(logement => logement.id === id);
            dispatch({ type: 'GET_LOGEMENT', payload: logement });
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <LogementContext.Provider value={{
            logements: state.logements,
            logement: state.logement,
            getLogements,
            getLogement
        }}>
            {props.children}
        </LogementContext.Provider>
    );
};


export default LogementState;