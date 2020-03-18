import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {email: '', password:''};
        }
    
  /* handle submit */
    onSubmit(){
        console.log(this.state);
    }


   render(){
    return (
        <Container>
            <Row>
            <h2>Login Form</h2>
            </Row>
        <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Form inline ref="form">
          <FormGroup>
            <Label for="exampleEmail" hidden>Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Email" onChange={(e) => this.setState({email: e.target.value})}/>
          </FormGroup>
          {' '}
          <FormGroup>
            <Label for="examplePassword" hidden>Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Password" ref="password" onChange={(e) => this.setState({password: e.target.value})}/>
          </FormGroup>
          {' '}
          <Button onClick={() => this.onSubmit()}>Submit</Button>
        </Form>
        </Col>
        </Row>
        </Container>
      );
   } 
 
}