import {useState} from "react";
import {Card, Button, Divider, TextInput, TextArea, NumInput} from "lib/components";

const Components = () => {
  const [textinput, setTextinput] = useState("");
  const [numinput, setNuminput] = useState(0);
  const [textarea, setTextarea] = useState("");

  return (
    <Card>
      <Button>Button</Button>
      <Divider title="test" className="mt-3" />
      <TextInput onChange={setTextinput} value={textinput} label="TextInput: " />
      <NumInput onChange={setNuminput} value={numinput} label="NumInput" min={-5} max={10} />
      <TextArea onChange={setTextarea} value={textarea} label="TextArea" />
    </Card>
  )
}
export default Components;