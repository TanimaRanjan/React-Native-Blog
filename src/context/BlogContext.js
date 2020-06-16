import createDataContext from './createDataContext'


const blogReducer = (state, action) => {

    switch(action.type) {
        case 'ADD_BLOG':
            return [...state,{
                title:`Blog Post #${state.length+1}`}];
        case 'DELETE_BLOG':
            let filteredState = state.filter(item => item.title !== action.payload)
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


export const { Context, Provider} = createDataContext(blogReducer, {addBlogPost}, [])

