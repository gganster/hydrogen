import { Link } from "react-router-dom";
import {Button, Spinner, Alert} from "lib/components";

const Overview = () => {
  return (
    <div className="p-5">
      <p>overview</p>
      <Button color="primary" size="xs">XS Button</Button>
      <Button color="primary" disabled>XS Button</Button><br />
      <Button color="secondary" size="sm">SM Button</Button>
      <Button color="secondary" disabled>SM Button</Button><br />
      <Button color="success" size="md">MD Button</Button>
      <Button color="success" disabled>MD Button</Button><br />
      <Button color="danger" size="lg">LG Button</Button>
      <Button color="danger" disabled>LG Button</Button><br />
      <Alert>My Alert</Alert>
      <Alert color="secondary">My Alert</Alert>
      <Alert color="success">My Alert</Alert>
      <Alert color="danger">My Alert</Alert>
      <Alert color="warning">My Alert</Alert>
      <Alert color="warning">My Alert</Alert>
      <Alert color="warning">My Alert</Alert>
      <Alert color="warning">My Alert</Alert>
      <Alert color="warning">My Alert</Alert>
      <Alert color="warning">My Alert</Alert>
      <Alert color="warning">My Alert</Alert>
      <Alert color="warning">My Alert</Alert>
      <Alert color="warning">My Alert</Alert>
      <Alert color="warning">My Alert</Alert>
      <Alert color="warning">My Alert</Alert>
      <Alert color="warning">My Alert</Alert>
      <Alert color="warning">My Alert</Alert>
      <Alert color="warning">My Alert</Alert>
      <Alert color="warning">My Alert</Alert>
      <Alert color="warning">My Alert</Alert>
      <Alert color="warning">My Alert</Alert>
      <Alert color="warning">My Alert</Alert>
      <Alert color="warning">My Alert</Alert>
      <Alert color="warning">My Alert</Alert>
      <Alert color="warning">My Alert</Alert>
      <Alert color="warning">My Alert</Alert>
      <Alert color="warning">My Alert</Alert>

      <div><Link to="/">to Login</Link></div>
    </div>
  )
}

export default Overview;