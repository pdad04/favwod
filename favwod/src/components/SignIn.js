import React from 'react';
import firebase from '../base';
import {Row, Col, Input, Button} from 'react-materialize';

class SignIn extends React.Component {

    state = {
        user: '',
        password: '',
        error: '',
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

        if(this.state.error){
            this.setState({error: ""});
        }
        
        const {user, password} = this.state

        firebase.auth().signInWithEmailAndPassword(user, password)
        .catch(error => {
          if(error.code === "auth/wrong-password"){
            this.setState({error: "Invalid Password"})
          }else if(error.code === "auth/too-many-requests"){
              this.setState({error: "Too many login attempts. Try again in 10 seconds"})
          }else{
            this.setState({error: "User not found"})
          }
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
                            <Input 
                                s={10} 
                                l={6} 
                                type="text" 
                                label="Username" 
                                name="username" 
                                onChange={this.handleInput}
                                required 
                            />
                        </Col>
                    </Row>  
                    <Row> 
                        <Col s={12} offset="s1 l3">
                            <Input 
                                s={10} 
                                l={6} 
                                type="password" 
                                label="Password"
                                name="password" 
                                onChange={this.handleInput} 
                                error={this.state.error}
                                required
                                validate
                            />
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