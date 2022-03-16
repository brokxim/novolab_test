import React from 'react';
export const IS_SUCCESS = 'IS_SUCCESS';
export const GET_POSTS = 'GET_POSTS';
 

export type actionTypes = 
  | {type: typeof IS_SUCCESS; payload:boolean}
  | {type: typeof GET_POSTS;   payload:postType[]}
   
export type initialStateType={
    isSuccess: boolean;
    posts?: [postType]  | [] | any;
}

  export type postType={
    userId:number;
    id: number;
    title: string;
    body:string
}
 

    export type postsType =postType[] |any;
  