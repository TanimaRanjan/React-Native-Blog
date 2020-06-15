import React, { useState, useReducer } from 'react'

const BlogContext = React.createContext()

const blogReducer = (state, action) => {

    switch(action.type) {
        case 'ADD_BLOG':
            return [...state,{
                title:`Blog Post #${state.length+1}`}];
        case 'DELETE_BLOG':
            return ;
        default:
            return state
    }

}
export const BlogProvider = ({children}) => {

    const [blogPosts, dispatch ] = useReducer(blogReducer, [])

    const addBlogPost = () => {
        dispatch({type:'ADD_BLOG'})
    }

    return <BlogContext.Provider 
    value={{data:blogPosts, addBlogPost}}>
        {children}
        </BlogContext.Provider>
}



export default BlogContext