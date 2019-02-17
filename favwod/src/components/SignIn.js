import React from 'react';
import firebase from '../base';
import {Row, Col, Input, Button} from 'react-materialize';

class SignIn extends React.Component {

    state = {
        user: '',
        password: '',
    }

    handleInput = (event) => {
        const field = event.target.attributes.getNamedItem('name').value

        if(field === 'username'){
            this.setState({user: event.target.value});
        }else{
            this.setState({password: event.target.value});
        }
    }

    signIn = (event) => {
        event.preventDefault();

        const {user, password} = this.state
        firebase.auth().signInWithEmailAndPassword(user, password)
        .catch(error => {
          console.log(error.code, error.message);
        });

        this.props.getUser();
    }

    render(){
        return (
            <div>
                <Row>
                    <h1 className="center-align">Sign In</h1>
                </Row>
                <form onSubmit={this.signIn}>
                    <Row>
                        <Col s={12} offset="s1 l3">
                            <Input s={10} l={6} type="text" label="Username" name="username" onChange={this.handleInput} required />
                        </Col>
                    </Row>  
                    <Row> 
                        <Col s={12} offset="s1 l3">
                            <Input s={10} l={6} type="password" label="Password" name="password" onChange={this.handleInput} required />
                        </Col>
                    </Row>
                    <Row>  
                        <Col s={12} offset="s4 l5">
                            <Button className="deep-orange accent-4">Sign In</Button>
                            <p>No account? <a href="/createAccount" className="sign-up">Sign Up!</a></p>
                        </Col>
                    </Row>
                </form>
            </div>
        );
    }
}

export default SignIn;