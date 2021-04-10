import React from "react";
import { Label, Input, Button, Form, FormGroup } from "reactstrap";
import Submit from "../querySubmit";
import "./style.css";

export default function SearchItems(props) {
  return (
    <div>
      <div className="container container-result">
        <Form onSubmit={props.onSubmit}>
          <FormGroup className="row mx-auto">
            <Label htmlFor="term" className="col-12 col-md-6 text-md-center">
              Search Type
            </Label>
            <Input
              onChange={props.onChange}
              className="col"
              id="term"
              name="term"
              value={props.term}
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
              onChange={props.onChange}
              className="col"
              id="location"
              name="location"
              value={props.location}
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
