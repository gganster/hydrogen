import {useState} from "react";
import { Link } from "react-router-dom";
import {Button, Spinner, Alert, Collapse, TextInput, Card} from "lib/components";

const Overview = () => {
  const [value, setValue] = useState("");

  return (
    <div className="">
      <p>overview</p>
      <Card>
        <TextInput value={value} onChange={setValue} label="test" />
        <TextInput value={"fz"} onChange={setValue} label="test" disabled/>
      </Card>
    </div>
  )
}

export default Overview;