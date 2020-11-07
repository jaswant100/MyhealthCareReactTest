import React, { Component } from 'react';
import {connect} from 'react-redux'
class ShoppingCart extends Component {
    constructor(props){
        super(props)
        this.state={
            count:1,
            itemTotal:0,
            //discount:0,
            Etotal:0
        }
    }
    ETotal=0;
    ItemTotal=0;
   // discount=0;
    componentDidMount(){
        this.props.AddCart.forEach((user,i)=>{
            this.ItemTotal+=user.Count*user.price;
            //this.discount +=user.Count*user.price*user.discount/100;
        })
       // this.ETotal =this.ItemTotal-this.discount;  
        this.setState({ itemTotal:this.ItemTotal})
    }
    componentDidUpdate(previousProps, previousState){
       //let ETotal=0;
       let ItemTotal=0;
       //let discount=0;
        this.props.AddCart.forEach((user,i)=>{
            ItemTotal+=user.Count*user.price;
           // discount +=user.Count*user.price*user.discount/100;
        })
        //console.log(ItemTotal)
        //ETotal =ItemTotal-discount;
        if (previousProps !== this.props) {
        this.setState({itemTotal:ItemTotal})
        }
    }
    AddCart=()=>{
        if(!this.props.AddCart || this.props.AddCart.length  === 0)
        return (<p>Cart Empty</p>)
       return this.props.AddCart.map((user,i)=>{
           return (
               <div key={i} className="d-flex cartContiner">
                   <img src={user.image} alt="" />
                   <div className="itemName">
               <h5 className="">{user.name}</h5>
               <div className="price">{user.price.actual}</div>
           <div className="discount">{user.discount +'% Off'}</div>
               </div>
               <div className="CountContainer">
                   <button onClick={()=>this.props.RemoveCount(user.Count,this.props.AddCart.indexOf(user))}>-</button>
                    <span>{user.Count}</span>
                    <button onClick={()=>{this.props.AddCount(user.Count,this.props.AddCart.indexOf(user))}}>+</button>
               </div>
               <div><button onClick={()=>this.props.cartAction(this.props.AddCart.indexOf(user))}>Remove</button></div>
               </div>
           )
       })
    }
    render() { 
        return (
        <div className="row">
            <div className="col-lg-7">{this.AddCart()}</div>
                <div className="col-lg-5">
                    <table>
                    <thead>
                        <tr>
                        <td>Price Details</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Price({this.props.AddCart.length} items)</td>
                        <td>{this.state.itemTotal}</td>
                    </tr>
                    <tr>
                        <td>Discount</td>
                        <td>{this.state.discount}</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <td>Total Payable</td>
                        <td>{this.state.itemTotal}</td>
                    </tr>
                    </tfoot>
                    </table></div>
        </div>
        );
    }
}
const mapStateToProps=(state)=>({
    AddCart:state.list.addCart,
})
export default connect(mapStateToProps)(ShoppingCart);