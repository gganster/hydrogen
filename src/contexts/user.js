import {createContext, useReducer, useContext} from 'react';

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
        user: action.user
      };
    case "logout":
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

const useUser = () => useContext(Context);

export default useUser;
export {Provider};