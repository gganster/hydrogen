import {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import { Button, Card, TextInput } from "lib/components";
import { useAuthUtilities } from "hooks/useAuth";

const Login = () => {
  const {loginWithMail} = useAuthUtilities();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const _login = async () => {
    setLoading(true);
    await loginWithMail(mail, password);
    setLoading(false);
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card>
        <h4 className="text-center mb-3">Connection</h4>
        <TextInput label="Email" placeholder="elon.musk@spacex.com" />
        <TextInput label="Mot de passe" placeholder="·········"/>
        <div className="flex justify-center">
          <Button onClick={_login}>Se connecter</Button>
        </div>
      </Card>
    </div>
  )
}

export default Login;