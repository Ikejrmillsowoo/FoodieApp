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
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../../redux/loginSlice";
import { baseUrl } from "../sourceData";

const url = baseUrl;
// const mapStateToProps = (state) => {
//   // console.log(state.searchItems);
//   return {
//     // users: state.users,
//     searchItems: state.searchItems.searchItem,
//     // favorites: state.favorites.favorites,
//   };
// };

// const mapDispatchToProps = {
//   fetchData: () => fetchData(),
//   // fetchUsers: () => fetchUsers(),
// };

const initialValues = {
  username: "",
  password: "",
};

function Login(props) {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialValues);

  const [modal, setModal] = useState(false);

  const loginToggle = () => setModal(!modal);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const reset = () => {
    setValues(initialValues);
  };

  //useEffect(() => {
  // const userLogin = {
  //   username: loginUsername,
  //   password: loginPassword,
  // };

  const loginUser = () => async () => {
    //dispatch(dataLoading());
    const response = await fetch(`${url}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = await response.json();
    // console.log(data);
    if (data.success) {
      dispatch(userLoggedIn(data.username));
    }
    //dispatch(alert(`login successful`));
  };
  // dispatch(loginUser());
  // }, [dispatch, loginUsername, loginPassword]);

  const onClick = (e) => {
    loginToggle();
    dispatch(loginUser());
    // props.submitLogin(e, values.username, values.password);
    // dispatch(userLogin(values));
    // dispatch();
    reset();
  };

  return (
    <div>
      <Form inline>
        <Button color="primary" onClick={() => alert("login coming soon")}>
          Log In
        </Button>
        {/* </Form> */}
        <Modal isOpen={modal} toggle={loginToggle}>
          <ModalHeader toggle={loginToggle}>
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
            <Button color="secondary" onClick={loginToggle}>
              Cancel
            </Button>
          </ModalFooter>
          <ModalFooter>
            <label>Need to sign up?</label>
            <Signup onClick={loginToggle} submitLogin={props.submitLogin} />
          </ModalFooter>
        </Modal>
      </Form>
    </div>
  );
}

//export default connect(mapStateToProps, mapDispatchToProps)(Login);
export default Login;
