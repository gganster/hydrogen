import {useState} from "react";
import {Card, Button, Divider, TextInput, TextArea, NumInput, Checkbox, RadioGroup} from "lib/components";

const Components = () => {
  const [textinput, setTextinput] = useState("");
  const [numinput, setNuminput] = useState(0);
  const [textarea, setTextarea] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [radio, setRadio] = useState();

  return (
    <Card>
      <Button>Button</Button>
      <Divider title="test" className="mt-3" />
      <TextInput onChange={setTextinput} value={textinput} label="TextInput: " />
      <NumInput onChange={setNuminput} value={numinput} label="NumInput" min={-5} max={10} />
      <TextArea onChange={setTextarea} value={textarea} label="TextArea" />
      <Checkbox onChange={setCheckbox} value={checkbox} label="label" />
      <RadioGroup options={[
        {label: "label 1", value: "value 1"},
        {label: "label 2", value: "value 2"},
        {label: "label 3", value: "value 3"}
      ]} onChange={setRadio} value={radio} label="label" />
      
    </Card>
  )
}
export default Components;