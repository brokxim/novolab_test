import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import a from './post';
const store = configureStore(
{ reducer:{ posts: a }
    })

export default store;
