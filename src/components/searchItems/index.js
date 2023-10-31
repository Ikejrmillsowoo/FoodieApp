import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Label, Input, Button, Form, FormGroup } from "reactstrap";
import "./style.css";
import { newTerm } from "../../redux/searchSlice";

export default function SearchItems() {
  const [formValues, setFormValues] = useState({
    term: "",
    location: "",
  });

  const dispatch = useDispatch();

  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  function submitForm(e) {
    e.preventDefault();
    dispatch(newTerm(formValues));
    setFormValues({
      term: "",
      location: "",
    });
  }

  return (
    <div>
      <div className="container container-result">
        <Form>
          <FormGroup className="row mx-auto">
            <Label htmlFor="term" className="col-12 col-md-6 text-md-center">
              Search Type
            </Label>
            <Input
              onChange={handleChange}
              className="col"
              id="term"
              name="term"
              value={formValues.term}
              placeholder="food/hotel etc."
            />
          </FormGroup>
          <FormGroup className="row mx-auto">
            <Label
              htmlFor="location"
              className="col-12 col-md-6 text-md-center"
            >
              Location
            </Label>
            <Input
              onChange={handleChange}
              className="col"
              id="location"
              name="location"
              value={formValues.location}
              placeholder="Zip code"
            />
          </FormGroup>

          <FormGroup className="row mx-auto">
            <Label
              htmlFor="category"
              className="col-12 col-md-6 text-left"
            ></Label>
            <Button
              color="primary"
              className="col-md-3"
              type="button"
              onClick={submitForm}
            >
              Submit
            </Button>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}
