import React, { useState } from "react";
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

function Signup(props) {
  const [signupModal, setSignupModal] = useState(false);

  const toggle = () => setSignupModal(!signupModal);

  return (
    <div>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Button color="primary" onClick={toggle}>
          Sign up
        </Button>
      </Form>
      <Modal isOpen={signupModal} toggle={toggle}>
        <ModalHeader toggle={toggle} onClick={props.onClick}>
          Create account
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="firstname">First Name</Label>
            <Input
              type="firstname"
              name="firstname"
              id="user_firstname"
              placeholder="Enter first name here"
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastname">Last Name</Label>
            <Input
              type="lastname"
              name="lastname"
              id="user_lastname"
              placeholder="Enter last name here"
            />
          </FormGroup>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="username"
              name="username"
              id="user_username"
              placeholder="Enter username here"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="user_password"
              placeholder="Enter password"
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.onClick}>
            Sign-up
          </Button>{" "}
          <Button color="secondary" onClick={toggle} onClick={props.onClick}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      {/* <Button onClick={onClick} color="primary">
        Log In
      </Button> */}
    </div>
  );
}

export default Signup;
