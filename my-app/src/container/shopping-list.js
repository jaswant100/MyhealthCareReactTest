import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux'
import {addCart} from '../action';
import $ from 'jquery';
class Shoppinglist extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    addcart=(cartid,e)=>{
        let {Glist}=this.props;
        let cart=Glist.filter(data=>data.id == e.target.value);
        addCart({...cart[0],Count:1});
        $(e.target).attr({disabled:'disabled'})

    }
    onload(){
        let {Glist,SortRatio, Search}=this.props
        if (!Glist && Glist instanceof Array && Glist.length)
        return <p>...Loading</p>;
        let  SearchFinalist=Glist;
        if(Search.length > 0){
        SearchFinalist = Glist.filter((user, i) => {
            if (!!Search.length) {
                console.log(user.name)
              return user.name.indexOf(Search) !== -1;
            } else {
              return user;
            }
          });
          console.log(SearchFinalist)
        }
        if(SortRatio.length > 0){
          SearchFinalist= SearchFinalist.sort((a, b)=> {
            if (SortRatio === 'Asc'){
                if (a.price.actual < b.price.actual) {
                  return -1;
                }
                 if (a.price.actual > b.price.actual) {
                  return 1;
                } 
              }
              else if(SortRatio === 'Desc'){
                if (a.price.actual < b.price.actual) {
                  return 1;
                }
                 if (a.price.actual > b.price.actual) {
                  return -1;
                } 
              }
              else if(this.props.SortRatio === 'Discount'){
                if (a.discount < b.discount) {
                  return -1;
                }
                 if (a.discount > b.discount) {
                  return 1;
                } 
              }
              return 0;
            })
            console.log(SearchFinalist)
        }
          //console.log(Glist)
        return SearchFinalist.map((data,i)=>{
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
                    <button className="cart" value={data.id} disabled={false} onClick={this.addcart.bind(data.id,this)}>Add to Cart</button>
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
    SortRatio:state.list.Sort,
    Search:state.list.Search
})
export default connect(mapStateToProps)(Shoppinglist);