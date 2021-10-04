import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { NavLink } from 'react-router-dom';

function Index(props) {
    const [users, setUsers] = useState([])
    
    const getUsers = async () => {
        try {
            let res = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(res.data)
        } catch (e) {
            console.log(e.message)
        }
    }
    
    useEffect(() => {
        getUsers()
    }, [])
    
    return (
        <div className="container">
            <div className="row">
                {
                    users.map((user, index) => {
                        return (
                            <div className="col-md-4" key={index}>
                                <div className="card mb-4">
                                    <div className="card-header fw-bold">
                                        {user.name}
                                    </div>
                                    <div className="card-body">
                                        <div className="mb-2">Email : {user.email}</div>
                                        <div className="mb-4">Website : <a href={`http://${user.website}`}>{user.website}</a></div>
                                        <NavLink className="btn btn-primary float-end" to={`/users/${user.id}`}> View</NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Index;