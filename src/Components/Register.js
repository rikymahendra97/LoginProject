import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

class Register extends Component {
    constructor(){
        super()
        this.state = {
            usename: '',
            full_name: '',
            email: '',
            password: '',
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.register = this.register.bind(this)
    }

    onChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit (e) {
        e.preventDefault()

        const newUser = {
            username: this.state.username,
            full_name: this.state.full_name,
            email: this.state.email,
            password: this.state.password,
        }

        this.register(newUser).then(res => {
            this.props.history.push(`/login`)
        })
    }

    register (newUser) {
        return axios
            .post('http://localhost:5000/users/register', {
                email: newUser.email,
                password: newUser.password,
                username: newUser.username,
                full_name: newUser.full_name
            })
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log(err)
            })
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                            <div className="form-group">
                                <label htmlFor="first_name">Username</label>
                                <input type="text" className="form-control" name="username" placeholder="Enter Username" value={this.state.username } onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="last_name">Full Name</label>
                                <input type="text" className="form-control" name="full_name" placeholder="Enter Full Name" value={this.state.full_name } onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" className="form-control" name="email" placeholder="Enter Email" value={this.state.email } onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" name="password" placeholder="Enter Password" value={this.state.password } onChange={this.onChange}/>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register