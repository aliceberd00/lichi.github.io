const defaultState = {
    items_array: []
}

export const itemReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "INSERT_ITEMS":
            return {...state, items_array: [...action.payload]}
        case "ADD_TO_TAIL":
            return {...state, items_array: [...state.items_array.slice(30, 89), ...action.payload]}
        case "ADD_TO_HEAD":
            return {...state, items_array: [...state.items_array.slice(0, 59), ...action.payload]}
        case "UPDATE_ITEM_VISIBILITY": {
            return {
                ...state, items_array: [...state.items_array.map(function (element) {
                        if (element.id == acton.payload.id) {
                            let result_element = element
                            result_element.visibility = action.payload.visibility
                            return result_element
                        } else {
                            return element
                        }
                    })]
            }
        }
        default:
            return state
    }
}
