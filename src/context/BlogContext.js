import createDataContext from './createDataContext'


const blogReducer = (state, action) => {

    switch(action.type) {
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

const addBlogPost = dispatch => {
    return (title, content, callback) => { 
        dispatch({type:'ADD_BLOG' , payload:{title, content}})
        callback()
    }
}

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({type:'DELETE_BLOG', payload:id})
    }
}

const editBlogPost = dispatch => {
    return (id, title, content, callback) => {
        dispatch({   
                type:'EDIT_BLOG', 
                payload:{id, title, content}})
        callback()
    }
}

export const { Context, Provider} = createDataContext(
    blogReducer, 
    {   addBlogPost, 
        deleteBlogPost,
        editBlogPost
    }, [{
        id:1,
        title:'Test 1', 
        content:'Test Content 1'
    }])

