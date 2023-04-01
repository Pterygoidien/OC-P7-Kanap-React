
const logementReducer = (state, action) => {
    switch (action.type) {
        case 'GET_LOGEMENTS':
            return {
                ...state,
                logements: action.payload,
            };
        case 'GET_LOGEMENT':
            return {
                ...state,
                logement: action.payload,
            };
        default:
            throw new Error('Unsupported');
    }
};
export default logementReducer;