import useFirebaseAuth from "lib/hooks/auth/useFirebaseAuth";
import firebase from "firebase";
import useUser from "contexts/user";

const firestore = firebase.firestore;

const useAuth = () => {
  const {user, loading} = useFirebaseAuth();
  return {user, loading};
}

const useAuthUtilities = () => {
  const [user, dispatch] = useUser();

  const logout = async () => {
  
  }
  
  const loginWithMail = async () => {
  
  }
  
  const forgotPassword = async () => {
  
  }
  
  const register = async (mail, password, data) => {
    let res = await firebase.auth().createUserWithEmailAndPassword(mail, password);
    await firestore().collection("users").doc(res.user.uid).set(data);
  }

  return ({logout, loginWithMail, forgotPassword, register})
}

export {useAuth, useAuthUtilities};
export default useAuth;