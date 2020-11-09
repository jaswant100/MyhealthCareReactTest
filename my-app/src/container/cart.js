import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Removecart,Addcount,Removecount} from '../action';
class Shoppingcart extends Component {
    constructor(props){
        super(props)
        this.state={
            count:1,
            itemTotal:0,
            Etotal:0
        }
    }
    ETotal=0;
    ItemTotal=0;
    componentDidMount(){
        this.props.AddCarted.forEach((user,i)=>{
            this.ItemTotal+=user.Count*user.price.actual;
        })
        this.setState({ itemTotal:this.ItemTotal})
    }
    componentDidUpdate(previousProps, previousState){
       let ItemTotal=0;
        this.props.AddCarted.forEach((user,i)=>{
            ItemTotal+=user.Count*user.price.actual;
        })
        if (previousProps !== this.props) {
        this.setState({itemTotal:ItemTotal})
        }
    }
    AddCart=()=>{
        if(!this.props.AddCarted || this.props.AddCarted.length  === 0)
        return (<p>Cart Empty</p>)
       return this.props.AddCarted.map((user,i)=>{
           return (
               <div key={i} className="d-flex cartContiner">
                   <img src={user.image} alt="" />
                   <div className="itemName">
               <h5 className="">{user.name}</h5>
               <div className="price">{user.price.actual}</div>
           <div className="discount">{user.discount +'% Off'}</div>
               </div>
               <div className="CountContainer">
                   <button onClick={()=>Removecount(user.Count,this.props.AddCarted.indexOf(user))}>-</button>
                    <span>{user.Count}</span>
                    <button onClick={()=>Addcount(user.Count,this.props.AddCarted.indexOf(user))}>+</button>
               </div>
               <div><button onClick={()=>Removecart(this.props.AddCarted.indexOf(user))}>Remove</button></div>
               </div>
           )
       })
    }
    render() { 
        return (
        <div className="row">
            <div className="columns medium-7 large-7">{this.AddCart()}</div>
                <div className="columns medium-5 large-5">
                    <table>
                    <thead>
                        <tr>
                        <td>Price Details</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Price({this.props.AddCarted.length} items)</td>
                        <td>{this.state.itemTotal}</td>
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
    AddCarted:state.list.addCart,
    Count:state.list.Count
})
export default connect(mapStateToProps)(Shoppingcart);