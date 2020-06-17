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
        default:
            return state
    }
}

const addBlogPost = dispatch => {
    return (title, content, cb) => { 
        dispatch({type:'ADD_BLOG' , payload:{title, content}})
        cb()
    }
}

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({type:'DELETE_BLOG', payload:id})
    }
}


export const { Context, Provider} = createDataContext(blogReducer, {addBlogPost, deleteBlogPost}, [])

