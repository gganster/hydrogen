import {useState} from "react";
import {TextInput, Card, TextArea, RichEditor} from "lib/components";

const Overview = () => {
  const [value, setValue] = useState("");
  const [richEditor, setRichEditor] = useState("");

  return (
    <div className="">
      <p>overview</p>
      <Card>
        <TextInput value={value} onChange={setValue} label="test" />
        <TextArea value={value} onChange={setValue} label="test"/>
        <RichEditor value={richEditor} onChange={setRichEditor}/>
      </Card>
    </div>
  )
}

export default Overview;