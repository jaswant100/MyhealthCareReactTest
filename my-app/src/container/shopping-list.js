import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux'
import {addCart} from '../action'
class Shoppinglist extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    addcart(cartid){
        let cart=this.props.Glist.filter(data=>data.id == cartid);
        addCart(cart[0])
        //console.log(cart)
    }
    onload(){
        if (!this.props.Glist && this.props.Glist instanceof Array && this.props.Glist.length)
          return <p>...Loading</p>;
          console.log(this.props.Glist)
        return this.props.Glist.map((data,i)=>{
             return(
            <div className="card" key={i}>
            <img src={data.image}/>
                    <div className="card-divider">
                        {data.name}
                    </div>
                    <div className="card-section">
                        <span className="Sactual">{data.price.actual}</span>
                        <span className="Sdisplay">{data.price.display}</span>
                        <span className="Sdiscount">{data.discount}%off</span>
                    </div>
                    <button className="cart" onClick={()=>this.addcart(data.id)}>Add to Cart</button>
            </div>
            ) 
        })
    }
    render() { 
        return (
            <div className="row">
                <div className="columns large-12 ListContainer">{this.onload()}</div>
            </div>
       );
    }
}
const mapStateToProps=(state)=>({
    Glist:state.list.list,
})
export default connect(mapStateToProps)(Shoppinglist);