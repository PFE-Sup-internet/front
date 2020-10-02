import React, { Component } from 'react';
import api from '../api';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirmPwd: "",
            username: ""
        }
    }

    updateFields = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submit(e) {
        e.preventDefault()

        if (this.state.password === this.state.confirmPwd
            && this.state.email && this.state.username && this.state.password && this.state.confirmPwd
            && this.state.username !== "" && this.state.confirmPwd !== "" && this.state.email !== "" && this.state.password !== "") {
                
            api.register(this.state.email, this.state.password, this.state.username)
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
                    <input required onChange={(e) => this.updateFields(e)} type="text" placeholder="username" name="username" />
                    <input required onChange={(e) => this.updateFields(e)} type="email" placeholder="email" name="email" />
                    <input required onChange={(e) => this.updateFields(e)} type="password" placeholder="password" name="password" />
                    <input required onChange={(e) => this.updateFields(e)} type="password" placeholder="confirm password" name="confirmPwd" />
                    <input type="submit" value="S'inscrire" />
                </form>
            </div>
        );
    }
}
 
export default Register;