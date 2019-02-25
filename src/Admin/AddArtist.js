import React, { Component } from 'react'

class AddArtist extends Component {
	state = {
        username: '',
        is_customer: true,
        is_artist: true,
        bio: '',
        first_name: '',
        last_name: '',
        email: ''
    }

    handleSubmit = (event) => {
        // stop page from refreshing
        event.preventDefault()
        fetch('http://localhost:9000/users', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": this.state.username,
                "is_customer": true,
                "is_artist": true,
                "bio": this.state.bio,
                "first_name": this.state.first_name,
                "last_name": this.state.last_name,
                "email": this.state.email,
                "password": '12345'
            })
        })
        this.setState({
            username: '',
            is_customer: true,
            is_artist: true,
            bio: '',
            first_name: '',
            last_name: '',
            email: ''
        })

    }

    handleChange = (event) => {

        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    render() {
        return (
            <div className='main'>
                <label>Add a New Artist
                <form id='createArtist' onSubmit={this.handleSubmit}>
                <input type='text' name='username' value={this.state.username} placeholder='Artist Username' onChange={this.handleChange} required='required' />
                <input type='text' name='bio' value={this.state.bio} placeholder='Artist Bio' onChange={this.handleChange} required='required'/>
                <input type='text' name='first_name' value={this.state.first_name} placeholder='Artist First Name' onChange={this.handleChange} required='required'/>
                <input type='text' name='last_name' value={this.state.last_name} placeholder='Artist Last Name' onChange={this.handleChange} required='required'/>
                <input type='text' name='email' value={this.state.email} placeholder='Artist Email' onChange={this.handleChange} required='required'/>
                <input type='submit'/>
                </form>
                </label>
            </div>
        )
    }
}

export default AddArtist