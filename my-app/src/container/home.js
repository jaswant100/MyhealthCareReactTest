import React, { Component, Fragment } from 'react'
import {launch} from '../action'
import Shoppinglist from './shopping-list'
class Home extends Component{
    componentDidMount(){
        launch()
    }
    render() { 
        return (
            <Fragment>
                <Shoppinglist/>
            </Fragment>
          );
    }
}
export default Home;
