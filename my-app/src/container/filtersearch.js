import React, { Component } from 'react';
import {SetFilterHighLow} from '../action';
class Filtersearch extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="filterContainer">
            <span>Sort By:</span>
            <button className="D_btnSort" onClick={()=>SetFilterHighLow('Desc')}>Price - High Low</button>
            <button className="D_btnSort" onClick={()=>SetFilterHighLow('Asc')}>Price - Low High</button>
            <button className="D_btnSort" onClick={()=>SetFilterHighLow('Discount')}>Discount</button>
            </div>
       );
    }
}
 
export default Filtersearch;