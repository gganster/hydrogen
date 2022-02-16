import {useState} from "react"
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
        <TextInput label="Email" placeholder="elon.musk@spacex.com" value={mail} onChange={setMail} onEnterPressed={_login}/>
        <TextInput type="password" label="Mot de passe" placeholder="·········" value={password} onChange={setPassword} onEnterPressed={_login}/>
        <div className="flex justify-center flex-col">
          <Link to="/forgot" className="text-sm text-center underline mb-2">Mot de passe oublié ?</Link>
          <Button onClick={_login} loading={loading}>Se connecter</Button>
        </div>
      </Card>
    </div>
  )
}

export default Login;