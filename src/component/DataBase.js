import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataBase() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
            console.log(res);
        })
        .catch(err =>{
            console.log(err);
        })
    })
  return (
    <div>
        <ul>
            {users.map(user =>( 
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>

    </div>
  )
}

export default DataBase