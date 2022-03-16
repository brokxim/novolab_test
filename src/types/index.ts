import React from 'react';
export const IS_SUCCESS = 'IS_SUCCESS';
export const GET_POSTS = 'GET_POSTS';
export const SET_COUNT = 'SET_COUNT'; 

export type actionTypes = 
  | {type: typeof IS_SUCCESS; payload:boolean}
  | {type: typeof GET_POSTS;   payload:postType[]}
   
export type initialStateType={
    
    posts?: [postType]  | [] | any;
    isSuccess: boolean;
    count?: number;
}

  export type postType={
    userId:number;
    id: number;
    title: string;
    body:string
}
 

    export type postsType =postType[] |any;
  