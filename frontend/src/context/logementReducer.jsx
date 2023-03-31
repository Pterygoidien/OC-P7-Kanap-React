
const logementReducer = (state, action) => {
    switch (action.type) {
        case 'GET_LOGEMENTS':
            return {
                ...state,
                logements: action.payload,
            };
        case 'SET_CURRENT_LOGEMENT':
            return {
                ...state,
                logement: action.payload,
            };
        case 'CLEAR_CURRENT_LOGEMENT':
            return {
                ...state,
                logement: null,
            };

        default:
            throw new Error('Unsupported');
    }
};
export default logementReducer;