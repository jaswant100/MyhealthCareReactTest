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
            let addCart1=[...state.addCart];
            addCart1[action.index].Count=action.payload;
           return {...state,addCart:addCart1};;
        case "Filter":
                return {...state,Sort: action.payload}
        case "RemoveCart":
            let addCart2=[...state.addCart];
            addCart2.splice(action.payload, 1);
            return {...state,addCart:addCart2};
        case "SetSearch":
                    return {...state,Search:action.payload}
        default:
            return state
    }
}