import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import a from './post';
const store = configureStore(
{ reducer:{ posts: a }
    })

export default store;
 
store.subscribe(()=>{
    const state = store.getState();
    const persist = {
        pologinst: state.posts.login,
        count: state.posts.password
      };
      window.localStorage.setItem('state', JSON.stringify(persist));

} )