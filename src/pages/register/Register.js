import React from "react";
import { Col, Row, Form, Button, FormGroup, Label, Input } from "reactstrap";

export default function Register() {
  return (
    <div className="d-flex justify-content-center " style={{paddingTop: 70}}>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleName">First Name</Label>
              <Input
                type="name"
                name="name"
                id="exampleName"
                placeholder="First Name"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleName">Last Name</Label>
              <Input
                type="name"
                name="password"
                id="examplePassword"
                placeholder="Last Name"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="strong password"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Repeate the Strong password"
          />
        </FormGroup>
        <FormGroup check>
          <Input type="checkbox" name="check" id="exampleCheck" />
          <Label for="exampleCheck" check>
            Check me out
          </Label>
        </FormGroup>
        <Button>Register</Button>
      </Form>
    </div>
  );
}
