import {useState} from "react";
import {Card, Button, Divider, TextInput, TextArea, NumInput, Checkbox, RadioGroup, Modal, Select, DateTimePicker} from "lib/components";
import { DatePicker, TimePicker } from "lib/components";
import {setHours, setMinutes} from "date-fns";

const Components = () => {
  const [textinput, setTextinput] = useState("");
  const [numinput, setNuminput] = useState(0);
  const [textarea, setTextarea] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [radio, setRadio] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectState, setSelectSate] = useState(null);
  const [date, setDate] = useState(null);
  const [dateTime, setDateTime] = useState(new Date());
  const [time, setTime] = useState(new Date());

  return (
    <Card>
      <Button>Button</Button>
      <Divider title="test" className="mt-3" />
      <TextInput onChange={setTextinput} value={textinput} label="TextInput: " />
      <NumInput onChange={setNuminput} value={numinput} label="NumInput" min={-5} max={10}  />
      <TextArea onChange={setTextarea} value={textarea} label="TextArea" />
      <Checkbox onChange={setCheckbox} value={checkbox} label="label" />
      <RadioGroup options={[
        {label: "label 1", value: "value 1"},
        {label: "label 2", value: "value 2"},
        {label: "label 3", value: "value 3"}
      ]} onChange={setRadio} value={radio} label="label" disabled />
      <Button onClick={() => setModalOpen(true)}>Modal</Button>
      <Modal isOpen={modalOpen} toggle={() => setModalOpen(false)}>
        <h5 className="text-2xl">Modal title</h5>
        <Divider className="mt-4" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        <div className="flex justify-end mt-4">
          <Button color="secondary" onClick={() => setModalOpen(false)}>Close</Button>
        </div>
      </Modal>
      <Select 
        options={[{label: "Guilian Ganster",  value: 0},
                  {label: "Thomas Bastien",   value: 1},
                  {label: "Curtis Coureau",   value: 2},
                  {label: "Nathan Bellanger", value: 3}
                ]}
        label="Select: "
        placeholder="placeholder..."
        value={selectState}
        onChange={setSelectSate}
      />
      <DatePicker value={date} onChange={setDate} label="DatePicker" />
      <TimePicker value={time} onChange={setTime} label="TimePicker"
                  minTime={setHours(setMinutes(new Date(), 0), 8)}
                  maxTime={setHours(setMinutes(new Date(), 0), 18)} />
      <DateTimePicker value={dateTime} onChange={setDateTime} label="DateTimePicker"  />
    </Card>
  )
}
export default Components;