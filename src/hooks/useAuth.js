import useFirebaseAuth from "lib/hooks/auth/useFirebaseAuth";

const useAuth = () => {
  const {user, loading} = useFirebaseAuth();
  return {user, loading};
}

export default useAuth;