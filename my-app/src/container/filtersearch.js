import React, { Component } from 'react';
class Filtersearch extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <React.Fragment>
            <div>Sort By:</div>
            <button>Price : Low to High</button>
            <button>Price : High to Low</button>
            <button>Discount</button>
            </React.Fragment>
       );
    }
}
 
export default Filtersearch;