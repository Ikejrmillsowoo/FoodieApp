import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
import { newUser } from "../../redux/signUpSlice";
import { baseUrl } from "../sourceData";

const url = baseUrl;

function Signup(props) {
  // console.log(props);
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });
  const [signupModal, setSignupModal] = useState(false);

  const toggle = () => setSignupModal(!signupModal);

  function handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  // const reset = () => {
  //   setFormValues({});
  // };

  const allToggle = () => {
    toggle();
    props.onClick();
  };

  const createUser = () => async () => {
    //dispatch(dataLoading());
    const response = await fetch(`${url}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    });

    const data = await response.json();
    // console.log(data);
    if (!data) {
      dispatch(alert(!newUser.isSignedUp));
    }
    //dispatch(alert(`Sign up successful`));
  };

  const onClick = (e) => {
    toggle();
    dispatch(createUser());
  };

  return (
    <div>
      <Form inline>
        <Button color="primary" onClick={toggle}>
          Sign up
        </Button>

        <Modal isOpen={signupModal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Create account</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="firstname">First Name</Label>
              <Input
                value={formValues.firstname}
                onChange={handleInputChange}
                type="firstname"
                name="firstname"
                id="user_firstname"
                placeholder="Enter first name here"
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastname">Last Name</Label>
              <Input
                value={formValues.lastname}
                onChange={handleInputChange}
                type="lastname"
                name="lastname"
                id="user_lastname"
                placeholder="Enter last name here"
              />
            </FormGroup>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                value={formValues.username}
                onChange={handleInputChange}
                type="username"
                name="username"
                id="user_username"
                placeholder="Enter username here"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                value={formValues.password}
                onChange={handleInputChange}
                type="password"
                name="password"
                id="user_password"
                placeholder="Enter password"
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={onClick}>
              Sign-up
            </Button>{" "}
            <Button color="secondary" onClick={allToggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Form>
    </div>
  );
}

export default Signup;
