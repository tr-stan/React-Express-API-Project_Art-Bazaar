import React, { Component } from 'react'
import Login from './Login'
import Admin from './Admin'

class Auth extends Component {
    state = {
            logged: false,
            username: '',
        }

    login = (username) => {
        this.setState({
            logged: true,
            username: username
        })
    }

    render() {
        return (
          <div className="main">
            {this.state.logged ? <Admin logged={this.state.logged} username={this.state.username}/> : <Login login={this.login}/>}
          </div>
        );
    }

}

export default Auth