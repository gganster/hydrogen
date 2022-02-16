import React, {useState} from "react";
import {Card, TextInput, Button, Divider} from "lib/components";
import firebase from "firebase";
import { toast } from "react-toastify";

const Profile = () => {
  const [errors, setErrors] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const _onSubmit = async () => {
    setErrors("");
    setLoading(true);
    if (!password) {
      setErrors("Le mot de passe est requis");
      setLoading(false);
      return;
    }
    if (!confirm) {
      setErrors("La confirmation du mot de passe est requis");
      setLoading(false);
      return;
    }
    if (confirm !== password) {
      setErrors("Les mots de passe ne correspondent pas");
      setLoading(false);
      return;
    }
    try {
      await firebase.auth().currentUser.updatePassword(password);
      toast.success("Votre mot de passe a été changé avec success.");
      setPassword("");
      setConfirm("");
    } catch (e) {
      toast.error(e.message);
    }
    setLoading(false);
  }

  return (
    <Card>
      <Divider title="Securité" />
      <div className="flex flex-wrap" style={{columnGap: 15}}>
        <TextInput 
          type="password"
          className="flex-1"
          label="Mot de passe"
          placeholder="·········"
          value={password}
          onChange={setPassword}
          invalid={errors.length > 0}
        />
        <TextInput
          type="password"
          className="flex-1"
          label="Confirmer"
          placeholder="·········"
          value={confirm}
          onChange={setConfirm}
          invalid={errors.length > 0}
        />
      </div>
      {errors ? <p className="mb-2 text-red-500 font-semibold text-center">{errors}</p>: <></>}
      <div className="flex items-center justify-center">
        <Button color="primary" onClick={_onSubmit} loading={loading}>Valider</Button>
      </div>
    </Card>
  )
}

export default Profile;