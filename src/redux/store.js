import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import post from './post';
const store = configureStore(
{ reducer:combineReducers({ posts: post})
    })

export default store;
