import {useState} from "react";
import {Card, Button, Divider, TextInput, TextArea, NumInput, Checkbox} from "lib/components";

const Components = () => {
  const [textinput, setTextinput] = useState("");
  const [numinput, setNuminput] = useState(0);
  const [textarea, setTextarea] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  return (
    <Card>
      <Button>Button</Button>
      <Divider title="test" className="mt-3" />
      <TextInput onChange={setTextinput} value={textinput} label="TextInput: " />
      <NumInput onChange={setNuminput} value={numinput} label="NumInput" min={-5} max={10} />
      <TextArea onChange={setTextarea} value={textarea} label="TextArea" />
      <Checkbox onChange={setCheckbox} value={checkbox} label="label" />
    </Card>
  )
}
export default Components;