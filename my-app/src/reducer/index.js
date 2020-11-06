import { combineReducers } from 'redux';
import {postReducer} from './postReducer';

export const allreducer=combineReducers({
    list:postReducer
})
