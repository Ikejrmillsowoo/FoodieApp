import React, { useState } from "react";
import Signup from "../signup/index";
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
import { fetchData, fetchUsers } from "../../redux/ActionCreators";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    users: state.users,
    searchItems: state.searchItems.searchItem,
    favorites: state.favorites.favorites,
  };
};

const mapDispatchToProps = {
  fetchData: () => fetchData(),
  fetchUsers: () => fetchUsers(),
};

const initialValues = {
  username: "",
  password: "",
};

function Login(props) {
  console.log(props);
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(
    "Password must be at least 6 characters"
  );

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

  const reset = () => {
    setValues({});
  };

  const onClick = (e) => {
    toggle();
    props.submitLogin(e, values.password, values.username);
    reset();
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    alert(values.username + values.password);
    // const { username, password } = initialValues;

    // if (password.length < 6) {
    //   alert("passwords myst be at least 6");
    // changed comparison to _less_ than
    // setValues({
    //   // update errors using setState -- never directly modify a component's state
    //   errors: {
    //     ...errors,
    //     password: "Password must be at least 6 characters",
    //   },
  };

  // const creds = { username, password };

  // if (creds.username && creds.password) {
  //   // objects are never falsey, so we need to check each field directly
  //   console.log(creds);
  // }
  // };
  // const reset = () => {
  //   setValues(initialValues);
  // };

  return (
    <div>
      <Form
        inline
        // onSubmit={onClick}
        // onSubmit={handleSubmit}
      >
        <Button color="primary" onClick={toggle}>
          Log In
        </Button>
        {/* </Form> */}
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>
            Log-In to your foodies account
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input
                type="username"
                name="username"
                className="form-control"
                id="user_username"
                value={values.username}
                onChange={handleInputChange}
                // handleSubmit={handleSubmit}
                placeholder="Enter username here"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                name="password"
                className="form-control"
                id="user_password"
                value={values.password}
                onChange={handleInputChange}
                // handleSubmit={handleSubmit}
                placeholder="Enter password"
                required
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={onClick}>
              Log In
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
          <ModalFooter>
            <label>Need to sign up?</label>
            <Signup onClick={toggle} submitLogin={props.submitLogin} />
          </ModalFooter>
        </Modal>
      </Form>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
