import { Store } from ".."

export const launch=()=>{
fetch('https://my-json-server.typicode.com/prograk/demo/items').then(res=>res.json()).then(data=>
    Store.dispatch({
        type:'Get',
        payload:data
    })
) 
}
export const addCart=(cartid)=>{
    Store.dispatch({
        type:'cartGet',
        payload:cartid
    })

}
export const SetSearch=(search)=> {
    Store.dispatch({
        type: "SetSearch",
        payload: search
      })
}
export const SetSlider=(slider)=> {
  Store.dispatch({
      type: "Slider",
      payload:slider
    })
}
export const SetFilterHighLow=(Desc)=> {
  Store.dispatch({
      type: "Filter",
      payload:Desc
    })
}
export const Removecart=(removeindex)=> {
    return {
        type: "RemoveCart",
        payload:removeindex
      }
  }
  export const Addcount=(count,index)=> {
    if(count > 0){
    return {
        type: "Count",
        payload:count+1,
        index:index
      }
    }
  }
  export const Removecount=(count,index)=> {
    if(count >= 2){
    return {
        type: "Count",
        payload:count-1,
        index:index
      }
    }
    return {type:"null"}
  }