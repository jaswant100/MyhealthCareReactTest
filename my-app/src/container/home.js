import React, { Component } from 'react'
import {launch} from '../action'
class Home extends Component{
    componentDidMount(){
        launch()
    }
    render() { 
        return (
            <div>home</div>
          );
    }
}
export default Home;
