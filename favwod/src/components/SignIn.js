import React from 'react';
import firebase from '../base';

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
            <form className="full-width wod-inputs" onSubmit={this.signIn}>
                <input type="text" className="movements" name="username" onChange={this.handleInput} placeholder="Enter Email address" required />
                <input type="password" className="movements" name="password" onChange={this.handleInput} placeholder="password" required />
                <button>Log In</button>
                <p>Don't have an account <a href="/createAccount">Sign Up!</a></p>
            </form>
        );
    }
}

export default SignIn;