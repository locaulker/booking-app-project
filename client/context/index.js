// import
import { createContext, useReducer } from "react"

// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload }
    case "LOGOUT":
      return { ...state, user: null }
    default:
      return state
  }
}

// initial state
const initialState = {
  user: null,
}

// create Context to generate 'Provider' and 'Consumer'
const Context = createContext({})

// Provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = { state, dispatch }
  return <Context.Provider value={value}>{children}</Context.Provider>
}

// export both 'Context' and 'Provider' variables
export { Context, Provider }
