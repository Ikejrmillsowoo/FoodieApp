import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchData, fetchUsers } from "../../redux/ActionCreators";
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

const mapStateToProps = (state) => {
  console.log(state.searchItems);
  return {
    // users: state.users,
    searchItems: state.searchItems.searchItem,
    // favorites: state.favorites.favorites,
  };
};

const mapDispatchToProps = {
  fetchData: () => fetchData(),
  // fetchUsers: () => fetchUsers(),
};

function Signup(props) {
  console.log(props);
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

  const reset = () => {
    setFormValues({});
  };

  const onClick = (e) => {
    toggle();
    props.submitLogin(
      e,
      formValues.firstname,
      formValues.lastname,
      formValues.username,
      formValues.password
    );
    reset();
  };

  return (
    <div>
      <Form
        inline
        // onSubmit={(e) =>
        //   props.submitLogin(
        //     e,
        //     formValues.firstname,
        //     formValues.lastname,
        //     formValues.username,
        //     formValues.password
        //   )
        // }
      >
        <Button color="primary" onClick={toggle}>
          Sign up
        </Button>
        {/* </Form> */}
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
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Form>
      {/* <Button onClick={onClick} color="primary">
        Log In
      </Button> */}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
