import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

function Show(props) {
    const [user, setUser] = useState([])
    let {identifier} = useParams()
    
    const getUser = async () => {
        try {
            let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`)
            setUser(res.data)
        } catch (e) {
            console.log(e.message)
        }
    }
    
    useEffect(() => {
        getUser()
    }, [identifier])
    
    return (
        <div className="container">
            <div className="card">
                <div className="card-header fw-bold">
                    <h4>{user.name}</h4>
                </div>
                <div className="card-body">
                    <div>Username : {user.username}</div>
                    <div>Email : {user.email}</div>
                    <div>Phone : {user.phone}</div>
                    <div>Website : {user.website}</div>
                </div>
            </div>
        </div>
    );
}

export default Show;