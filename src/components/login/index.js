import React, { useState } from "react";
import Signup from "../signup/signup";
import {
  Button,
  Form,
  Input,
  Label,
  FormGroup,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "reactstrap";

const initialValues = {
  username: "",
  password: "",
};

function Login(props) {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [values, setValues] = useState(initialValues);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  console.log(values);

  // const reset = () => {
  //   setValues(initialValues);
  // };

  return (
    <div>
      <Form
        inline
        onSubmit={(e) => props.submitLogin(e, values.password, values.username)}
      >
        <Button color="primary" onClick={toggle}>
          Log In
        </Button>
      </Form>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          Log-In to your foodies account
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="username"
              name="username"
              id="user_username"
              value={values.username}
              onChange={handleInputChange}
              placeholder="Enter username here"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="user_password"
              value={values.password}
              onChange={handleInputChange}
              placeholder="Enter password"
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Log In
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
        <ModalFooter>
          <Signup onClick={toggle} />
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Login;
