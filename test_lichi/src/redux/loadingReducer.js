const defaultState = {
    is_loading: false
}

export const loadingReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "UPDATE_LOADING":
            return {...state, is_loading: action.payload}

        default:
            return state
    }
}
