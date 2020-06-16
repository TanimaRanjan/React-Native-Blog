import createDataContext from './createDataContext'


const blogReducer = (state, action) => {

    switch(action.type) {
        case 'ADD_BLOG':
            return [...state, {
                        id:  Math.floor(Math.random() * 99999), 
                        title:`Blog Post #${state.length+1}`,
                        content:`Blog Post Content #${state.length+1}`
                    }];
        case 'DELETE_BLOG':
            let filteredState = state.filter(item => item.id !== action.payload)
            return [...filteredState];
        default:
            return state
    }
}

const addBlogPost = dispatch => {
    return () => { 
        dispatch({type:'ADD_BLOG'})
    }
}

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({type:'DELETE_BLOG', payload:id})
    }
}


export const { Context, Provider} = createDataContext(blogReducer, {addBlogPost, deleteBlogPost}, [])

