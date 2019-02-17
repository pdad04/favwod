import React from 'react';
import firebase from '../base';
import {Input, Button, Row, Col} from 'react-materialize';

class CreateAccount extends React.Component {
    state = {
        email: '',
        password: '',
        confirmPassword: '',
        
    }

    handleCreate = (event) => {
        event.preventDefault();
        const {email, password, confirmPassword } = this.state;
        
        if(password !== confirmPassword){
            alert("Passwords must match");
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(error => {
            console.log(error.code, error.message);
        });

        this.props.getUser();
    }

    handleInput = (event) => {
        const field = event.target.attributes.getNamedItem('name').value
        
        if(field === 'password'){
            this.setState({password: event.target.value});
        }else if(field=== 'confirm'){
            this.setState({confirmPassword: event.target.value});
        }else{
            this.setState({email: event.target.value});
        }
    }
    
    render() {
        return(
            <div>
                <h1 className="center-align">Create Account</h1>
                <form onSubmit={this.handleCreate}>
                    <Row>
                        <Col s={12} offset="s1 l3">
                            <Input s={10} l={6}  type="email" label="Email" name="email" onChange={this.handleInput} required />
                        </Col>
                    </Row>
                    <Row>
                        <Col s={12} offset="s1 l3">
                            <Input s={10} l={6} type="password" label="Password" name="password" onChange={this.handleInput} required />
                        </Col>
                    </Row>
                    <Row>
                        <Col s={12} offset="s1 l3">
                            <Input s={10} l={6} type="password" label="Confirm" name="confirm" onChange={this.handleInput} required />
                        </Col>
                    </Row>
                    <Row>
                        <Col s={12} offset="s3 l5">
                            <Button 
                                type="submit"
                                className="deep-orange accent-4"
                                >Create Account
                            </Button>
                        </Col>
                    </Row> 
                </form>
            </div>
        )
    }
}

export default CreateAccount;