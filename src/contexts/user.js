import {createContext, useReducer, useContext} from 'react';
import firebase from 'firebase';

const Context = createContext();

function Reducer(state, action) {
  switch(action.type) {
    case "endLoad": 
      return {
        ...state,
        loading: false
      }
    case "login":
      return {
        loading: false,
        user: Object.assign(firebase.auth().currentUser, action.user)
      };
    case "logout":
      firebase.auth().signOut();
      return {
        user: null,
        loading: false
      };
    default:
      return {...state};
  }
}

const Default = {
  user: null,
  loading: true
}

const Provider = ({children}) => {
  const [ctx, dispatch] = useReducer(Reducer, Default);

  return (
    <Context.Provider value={[ctx, dispatch]}>
      {children}
    </Context.Provider>
  )
}

const useCtx = useContext(Context);

export default useCtx;
export {Provider};