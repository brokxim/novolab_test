import axios from 'axios'; 
import {createAction,createReducer,createSlice, current} from '@reduxjs/toolkit'

import {IS_SUCCESS,GET_POSTS } from '../types'
import {postsType,initialStateType } from '../types'


export const getPosts=async(dispatch:postsType)=>{
const response = await axios.get(`https://gorest.co.in/public/v1/posts`)
    return dispatch({type:GET_POSTS,payload:response.data.data})
}
export const updateSuccess=(updateSuccess:boolean)=>{
    return{type:IS_SUCCESS,payload:updateSuccess }
}
export const updateCount=(updateCount:number)=>{
        return{type:IS_SUCCESS,payload:updateSuccess }
}

export default createReducer({posts: [],isSuccess:false,count:-1},{
    GET_POSTS:(state,action)=>{
       state.posts=action.payload},
    IS_SUCCESS:(state,action)=>{
       state.isSuccess=action.payload},
    SET_COUNT:(state,action)=>{
       state.count=action.payload}
})





// const a=createSlice({
//     name:'posts',
//     initialState:{
//         posts:[]
//     },
//     reducers:{
//         getPosts:(state,action)=>{
//             state.posts=action.payload
//           }
//     }
// })
// export const actions = a.actions;
// export default a.reducer