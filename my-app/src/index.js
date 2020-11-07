import React, {Suspense,Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import '../node_modules/foundation-sites/dist/css/foundation.min.css'
import Home from './container/home';
import Cart from './container/cart'
import Header from './container/header'
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Router,Route,Switch } from 'react-router-dom';
import thunk from "redux-thunk";
import {allreducer} from './reducer'
import { applyMiddleware, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { Footer } from './container/footer';
const History =createBrowserHistory();
const middleware= applyMiddleware(thunk,createLogger());
export const Store=createStore(allreducer,composeWithDevTools(middleware))
ReactDOM.render(
  <Provider store={Store}>
    <Router history ={History}>
      <Fragment>
        <Header/>
        <Suspense fallback={<p>Loading..</p>}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/cart" component={Cart}/>
          </Switch>
        </Suspense>
        <Footer/>
    </Fragment>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
