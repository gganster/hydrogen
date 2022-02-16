import useFirebaseAuth from "lib/hooks/auth/useFirebaseAuth";
import firebase from "firebase";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const firestore = firebase.firestore;

const useAuth = () => {
  const {user, loading} = useFirebaseAuth();
  return {user, loading};
}

const useAuthUtilities = () => {
  const history = useHistory();

  const logout = async () => {
    firebase.auth().signOut();
    history.push("/")
  }
  
  const loginWithMail = async (mail, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(mail, password);
    } catch (e) {
      console.error(e);
      toast.error(e.message);
    }
  }
  
  const forgotPassword = async (mail) => {
    await firebase.auth().sendPasswordResetEmail(mail)
  }
  
  const register = async (mail, password, data) => {
    let res = await firebase.auth().createUserWithEmailAndPassword(mail, password);
    await firestore().collection("users").doc(res.user.uid).set(data);
  }

  return ({logout, loginWithMail, forgotPassword, register})
}

export {useAuth, useAuthUtilities};
export default useAuth;