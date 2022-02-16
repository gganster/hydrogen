import {useState} from "react"
import { Button, Card, TextInput } from "lib/components";
import { toast } from "react-toastify";
import { useAuthUtilities } from "hooks/useAuth";

const Register = () => {
  const {register} = useAuthUtilities();
  const [nickname, setNickname] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const _register = async () => {
    setLoading(true);
    try {
      await register(mail, password, {nickname, createdAt: new Date()});
    } catch (e) {
      console.error(e);
      toast.error(e.message);
    }
    setLoading(false);
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card>
        <h4 className="text-center mb-3">Inscription</h4>
        <TextInput label="Surnom"
                   placeholder="Elon Musk"
                   onChange={setNickname}
                   value={nickname} />
        <TextInput label="Email" placeholder="elon.musk@spacex.com" onChange={setMail} value={mail} />
        <TextInput type="password"
                   label="Mot de passe"
                   placeholder="·········" 
                   onChange={setPassword} value={password} />
        <TextInput type="password"
                   label="Confirmation"
                   placeholder="·········" 
                   onChange={setConfirm} value={confirm} />
        <div className="flex justify-center">
          <Button onClick={_register} loading={loading}>Inscription</Button>
        </div>
      </Card>
    </div>
  )
}

export default Register;