-import React, {useReducer} from 'react'

export default (reducer, actions, initialState) => {

    const Context = React.createContext()

    const Provider = ({children}) => {

       const [state, dispatch ] = useReducer(reducer, initialState)

        // actions == { addBlogPost: (dispatch) => return () => {} }

        const boundActions = {}
        for(let key in actions) {
            // Calling action with dispatch and storing the return function in bound action
            // that will be passed to Provider 
            boundActions[key] = actions[key](dispatch)
        }

        return <Context.Provider 
                    value={{state, ...boundActions}}>
                {children}
            </Context.Provider>
    }


    return { Context, Provider }
}