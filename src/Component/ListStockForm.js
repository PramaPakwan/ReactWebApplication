import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap"

function ListStockForm(){
    return(
        <div>
            <Form>
            <Row form>
            <Col md={3}>
                <FormGroup>
                <Label for="exampleEmail">Select stock</Label>
                <Input type="email" name="stock" id="exampleEmail" placeholder="Select stock" />
                </FormGroup>
            </Col>
            <Col md={3}>
               <Button color="secondary" size="lg" style = {{
                       position: "absolute",
                       top: "33%",
                       left: "32%"
               }}>Search</Button>
            </Col>
            <Col md={3}>
                <FormGroup>
                <Label for="examplePassword">Industry</Label>
                <Input type="password" name="industry" id="examplePassword" placeholder="Select industry" />
                </FormGroup>
            </Col>
            </Row>
            </Form>
        </div>
    );
}
export default ListStockForm