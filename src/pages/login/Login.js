import React from "react";
import { Row, Col,  FormGroup, Label, Input } from "reactstrap";



export default function Login() {
  return (
    <div  className="d-flex justify-content-center" style={{paddingTop: 70}}>
      <Row form>
          <Col md={10}>
            <FormGroup>
              <Label for="exampleCity">Email || Phone || Username</Label>
              <Input type="text" name="city" id="exampleCity" placeholder="aa" />
            </FormGroup>
          </Col>
          
          <Col md={10}>
            <FormGroup>
              <Label for="exampleZip">Password</Label>
              <Input type="text" name="zip" id="exampleZip" placeholder="aa" />
            </FormGroup>
          </Col>
        </Row>
        
    </div>
  );
}

