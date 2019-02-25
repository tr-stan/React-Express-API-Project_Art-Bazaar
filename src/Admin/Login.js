import React, { Component } from 'react'

class Login extends Component {
        state = {
            username: '',
            password: ''
        }

    handleSubmit = (event) => {
        // stop page from refreshing
        event.preventDefault()
        if (this.state.password === '12345') {
            this.props.login(this.state.username)
        }
    }

    handleChange = (event) => {

        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    render() {
        return (
            <form className='main' onSubmit={this.handleSubmit}>
				<input type='text' name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} />
        		<input type='password' name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
        		<input type='submit' value="Submit" />
			</form>
        )
    }
}

export default Login