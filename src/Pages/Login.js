import React, { Component } from 'react';
import api from '../api';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    updateFields(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    submit(e) {
        e.preventDefault()

        if (this.state.email && this.state.password && this.state.email !== "" && this.state.password !== "") {
            api.login(this.state.email, this.state.password)
            .then((result) => {
                // redirect
            })
            .catch((error) => {
                //handle error
            })
        }
        else {
            // handle error
        }
    }

    render() { 
        return (
            <div>
                <form onSubmit={(e) => this.submit(e)}>
                    <input required onChange={(e) => this.updateFields(e)} type="email" placeholder="email" name="email" />
                    <input required onChange={(e) => this.updateFields(e)} type="password" placeholder="password" name="password" />
                    <input type="submit" value="Se connecter" />
                </form>
            </div>
        );
    }
}
 
export default Login;