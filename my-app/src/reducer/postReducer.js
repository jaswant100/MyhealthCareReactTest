const initialstate = {
    list: []
}
export const postReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'Get':
            return { ...state, list: action.payload }
        default:
            return state
    }
}