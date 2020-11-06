import { Store } from ".."

export const launch=()=>{
fetch('https://my-json-server.typicode.com/prograk/demo/items').then(res=>res.json()).then(data=>
    Store.dispatch({
        type:'Get',
        payload:data
    })
)
}