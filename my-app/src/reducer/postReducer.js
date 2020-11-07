const initialstate = {
    list: [],
    addCart:[]
}
export const postReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'Get':
            return { ...state, list: action.payload}
        case 'cartGet':
            return {...state,addCart:[...state.addCart,action.payload]}
        default:
            return state
    }
}