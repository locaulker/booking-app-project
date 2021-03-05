// import
import { createContext, useReducer } from "react"
import firebase from "../firebase"

// reducer funtion
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
  user: null
}

// create context to generate 'Provider' and 'Consumer'
const Context = createContext({})

const Provider = ({ children }) => {
  //
}
