import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
// import NewUserForm from './NewUserForm'

class Users extends Component {
    state = {
        users: [],
        showCreateForm: false
    }

    componentWillMount () {
        this.getAllUsers()
    }

    getAllUsers = async () => {
        const res = await axios.get('/api/users')
        this.setState({users: res.data})
    }

    render () {
        return (
            <div>
                <h1>This is the Users Page</h1>
            </div>
        )
    }

}

export default Users