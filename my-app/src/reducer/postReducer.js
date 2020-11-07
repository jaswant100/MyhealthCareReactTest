const initialstate = {
    list: [],
    addCart:[],
    Search:"",
    Count:1,
    Sort:''
}
export const postReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'Get':
            return { ...state, list: action.payload}
        case 'cartGet':
            return {...state,addCart:[...state.addCart,action.payload]}
        case "Count":
            addCart[action.index].Count=(action.payload);
            return {...state,addCart}
        case "Filter":
                return {...state,Sort: action.payload}
        case "SetSearch":
                    return {...state,Search:action.payload}
        default:
            return state
    }
}