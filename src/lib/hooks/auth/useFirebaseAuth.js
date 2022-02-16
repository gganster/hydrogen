import {useEffect} from "react";
import firebase from "firebase";
import sleep from "lib/helpers/sleep";
import useUser from "contexts/user";
import { useHistory } from "react-router-dom";

const auth = firebase.auth;
const firestore = firebase.firestore;

const useFirebaseAuth = () => {
  const history = useHistory();
  const [user, dispatch] = useUser();

  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(async (_user) => {
      if (_user) {//connect the user
        let counterLimit = 5; //5 attempts to connect
        let meta = await firestore().collection("users")
                                    .doc(_user.uid)
                                    .get();
        while ((!meta || !meta.exists) && counterLimit > 0) {
          await sleep(1000);
          meta = await firestore().collection("users")
                                  .doc(_user.uid)
                                  .get();
          counterLimit--;
        }
        if (meta.exists) {
          dispatch({type: "login", user: {...meta.data(), ..._user}});
        } else {
          auth().signOut();
          dispatch({type: "logout"});
          history.push("/")
        }
      } else {
        dispatch({type: "logout"});
        dispatch({type: "setLoading", loading: false})
      }
    })
    return (subscribe);
  }, [history, dispatch])

  useEffect(() => {
    if (user.user && !user.loading) {
      dispatch({type: "setLoading", loading: false})
      history.push("/dashboard");
    }
  }, [user.user, user.loading, history, dispatch])

  return ({user: user.user, loading: user.loading});
}

export default useFirebaseAuth;