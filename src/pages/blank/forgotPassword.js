import {useState} from "react";
import {Button, Card, TextInput} from "lib/components";
import { useAuthUtilities } from "hooks/useAuth";
import {toast} from "react-toastify";

const ForgotPassword = () => {
  const {forgotPassword} = useAuthUtilities();
  const [mail, setMail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("Un mail de réinitialisation vous a été envoyé sur votre boîte mail.");

  const _forgotPassword = async () => {
    setLoading(true);
    try {
      await forgotPassword(mail);
      setStatus("Un mail de réinitialisation vous a été envoyé sur votre boîte mail.");
      setMail("");
    } catch (e) {
      console.error(e);
      toast.error(e.message);
    }
    setLoading(false);
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card>
        <h4 className="text-center mb-3">Mot de passe oublié</h4>
        <TextInput type="mail" label="Email" placeholder="elon.musk@spacex.com" value={mail} onChange={setMail} onEnterPressed={_forgotPassword} />
        {status ? <p className="mt-1 mb-3 text-center">{status}</p>: <></>}
        <div className="flex justify-center">
          <Button onClick={_forgotPassword} loading={loading}>Valider</Button>
        </div>
      </Card>
    </div>
  )
}

export default ForgotPassword;