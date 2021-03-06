import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const blogReducer = (state, action) => {

    switch(action.type) {
        case 'GET_ALL_BLOGS':
            return action.payload
        case 'ADD_BLOG':
            return [...state, {
                        id:  Math.floor(Math.random() * 99999), 
                        title:action.payload.title,
                        content:action.payload.content
                    }];
        case 'DELETE_BLOG':
            let filteredState = state.filter(item => item.id !== action.payload)
            return [...filteredState];
        case 'EDIT_BLOG':
            return state.map((blog) => blog.id === action.payload.id ? action.payload : blog)
        default:
            return state
    }
}


const getBlogPosts = dispatch => {
    return async () => {
        try {
            const response = await jsonServer.get('/blogposts')
            dispatch({type:'GET_ALL_BLOGS', payload:response.data})
        } catch(error) {
            console.log(error)
        }
       
    }
}

const addBlogPost = dispatch => {
    return async (title, content, callback) => { 
        try {
            await jsonServer.post('/blogposts', {title, content})
            // dispatch({type:'ADD_BLOG' , payload:{title, content}})   
            if(callback) {
                callback()  
            } 
        } catch(error) {
            console.log(error)
        }
    }
}

const deleteBlogPost = dispatch => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`)
        dispatch({type:'DELETE_BLOG', payload:id})
    }
}

const editBlogPost = dispatch => {
    return async (id, title, content, callback) => {
        try {
            await jsonServer.put(`/blogposts/${id}`, {title, content})
            dispatch({   
                    type:'EDIT_BLOG', 
                    payload:{id, title, content}})
            if(callback) {
                callback()  
            } 
        } catch(error) {
            console.log(error)
        }
       
    }
}

export const { Context, Provider} = createDataContext(
    blogReducer, 
    {   getBlogPosts,
        addBlogPost, 
        deleteBlogPost,
        editBlogPost
    }, [])

