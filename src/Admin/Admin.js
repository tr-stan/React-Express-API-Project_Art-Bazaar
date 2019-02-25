import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Admin extends Component {

    render() {
        return(
            <div className='main'>
            <Link to={{pathname:`/admin/add`, state: this.props.logged}}>Add an Artist</Link>
            </div>
        )
    }
}

export default Admin