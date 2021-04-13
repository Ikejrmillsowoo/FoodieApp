import React, { useState } from "react";
import { Label, Input, Button, Form, FormGroup } from "reactstrap";
import "./style.css";

export default function SearchItems(props) {
  const [formValues, setFormValues] = useState({
    term: "",
    location: "",
  });

  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <div className="container container-result">
        <Form
          onSubmit={(e) =>
            props.onSubmit(e, formValues.term, formValues.location)
          }
        >
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
            <Button color="primary" className="col-3" type="submit">
              Submit
            </Button>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}
