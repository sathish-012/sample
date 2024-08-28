import React, { useState } from 'react';

export default function Register1() {
    const [userList, setUserList] = useState([]);

    async function getData() {
        let res = await fetch("https://reqres.in/api/users?page=2", {
            method: "GET"
        });
        let json = await res.json();
        setUserList(json['data']);
    }

    return (
        <div>
            <button onClick={getData}>Click</button>
            {userList.map((obj, index) => (
                <div key={index}>
                    <h1>Name:{obj.first_name} {obj.last_name}</h1>
                    <img 
                        src={obj.avatar} 
                        alt={`${obj.first_name}'s avatar`} 
                        style={{ borderRadius: '50%', width: '100px', height: '100px' }} 
                    />
                    <p>Email: {obj.email}</p>
                </div>
            ))}
        </div>
    );
}
