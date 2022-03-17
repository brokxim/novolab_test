import axios from 'axios'; 
import {createAction,createReducer,createSlice, current} from '@reduxjs/toolkit'
import {IS_SUCCESS,GET_POSTS,SET_COUNT,SET_LOGIN,SET_PASSWORD ,SET_LOADING} from '../types'
import {postsType,initialStateType } from '../types'
  
export const getPosts=async(dispatch:postsType)=>{
const response = await axios.get(`https://gorest.co.in/public/v1/posts`)
    return dispatch({type:GET_POSTS,payload:response.data.data},{type:SET_LOADING,payload:false})
}
export const updateLoading=(dispatch:postsType)=>{
    return dispatch({type:'SET_LOADING',payload:false}) 
}
export const updateSuccess=(updateSuccess:boolean)=>{
    return{type:IS_SUCCESS,payload:updateSuccess }
}
export const updateCount=(updateCount:number)=>{
        return{type:SET_COUNT,payload:updateCount }
}
export const updateLogin=(updateLogin:string)=>{
    return{type:SET_LOGIN,payload:updateLogin }
}
export const updatePassword=(updatePassword:string)=>{
    return{type:SET_PASSWORD,payload:updatePassword }
}
export default createReducer({posts: [],isSuccess:false,count:-1,login:'g',password:'',loading:true},{
    GET_POSTS:(state,action)=>{
       state.posts=action.payload},
    IS_SUCCESS:(state,action)=>{
       state.isSuccess=action.payload},
    SET_COUNT:(state,action)=>{
       state.count=action.payload},
    SET_LOGIN:(state,action)=>{
        state.login=action.payload},
    SET_PASSWORD:(state,action)=>{
        state.password=action.payload},
    SET_LOADING:(state,action)=>{
        state.loading=action.payload}
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