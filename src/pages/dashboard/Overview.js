import {useState} from "react";
import { Link } from "react-router-dom";
import {Button, Spinner, Alert, Collapse} from "lib/components";

const Overview = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className="p-5">
      <p>overview</p>
      <Button onClick={() => setCollapse(!collapse)}>{collapse ? "close" : "open"}</Button>
      <Collapse unmount isOpen={collapse}>
        <Alert>Test</Alert>
        <Alert>Test</Alert>
      </Collapse>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <Alert>Test</Alert>
      <div><Link to="/">to Login</Link></div>
    </div>
  )
}

export default Overview;