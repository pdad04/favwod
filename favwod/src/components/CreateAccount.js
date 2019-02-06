import React from 'react';
import firebase from '../base';

class CreateAccount extends React.Component {
    state = {
        email: '',
        password: '',
        confirmPassword: '',
        
    }

    // componentDidMount(){
    //     this.props.getUser()
    // }

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
            <form className="full-width wod-inputs" onSubmit={this.handleCreate}>
                <label htmlFor="username">Email</label>
                <input type="email" className="movements" name="username" placeholder="Email Address" onChange={this.handleInput} required></input>

                <label htmlFor="password">Password</label>
                <input type="password" className="movements" name="password" placeholder="Password" onChange={this.handleInput} required />

                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" className="movements" name="confirm" onChange={this.handleInput} required />

                <button type="submit">Create Account</button>
            </form>
        )
    }
}

export default CreateAccount;