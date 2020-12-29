const createReducer = (initialReducer, handlers) => (state = initialReducer, action) => {
    if (handlers.hasOwnProperty(action.type)) {
        return handlers[action.type](state, action);
    } else {
        return state
    }
}
export default createReducer;