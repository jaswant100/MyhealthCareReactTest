import React, { Component, Fragment } from 'react'
import {launch} from '../action'
import Shoppinglist from './shopping-list';
import Filtersearch from './filtersearch'
class Home extends Component{
    componentDidMount(){
        launch()
    }
    render() { 
        return (
            <Fragment>
                <Filtersearch/>
                <Shoppinglist/>
            </Fragment>
          );
    }
}
export default Home;
