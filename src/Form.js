import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'

class Form extends Component{
    obj=[];
    constructor(props){
        super(props);
        this.state={
            username:"",
            skills:"",
            technology:"",
            email:""
        };
    }

    componentDidMount(){
        this.reactRef.current.focus();
    }
    Handler(event){
        this.setState({
            [event.target.name]:event.target.value;
        });
    }

    formHandler(){
        this.obj=[];
        this.storage=JSON.parse(localStorage.getItem("formData"));
        if(this.storage)
        {
            this.obj=this.storage;
        }
        this.obj=[...this.obj,this.state];
        localStorage.setItem("formdata",JSON.stringify(this.obj));
        this.props.history.push("/home");
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
                <Label for="exampleEmail" hidden>User Name</Label>
                <Input type="text" name="uname" id="exampleEmail" placeholder="Username"/>
              </FormGroup>
              {' '}
              <FormGroup>
                <Label for="exampleEmail" hidden>Skills</Label>
                <Input type="text" name="skills" id="exampleEmail" placeholder="Skills"/>
              </FormGroup>
              {' '}
              <FormGroup>
                <Label for="exampleEmail" hidden>Technology</Label>
                <Input type="text" name="technology" id="exampleEmail" placeholder="Technology"/>
              </FormGroup>
              {' '}
              <FormGroup>
                <Label for="exampleEmail" hidden>Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Email"/>
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
