import React, { useState } from 'react';


const Home = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();

        if ( user !== "" && password !== "") {
        window.location.href = '/chats';
        console.log("Hey " + user);
        return
        } else {
        window.location.href = '/';
        alert("Fill in all fields!");
        }

    }

    return (
            
        <div className="flex flex-col text-blue-naval">

            <div className="flex flex-row h-auto z-0">

                    <div className="flex flex-col w-nine m-5 text-2xl">
                    <form action="/chats" method="post" onSubmit={handleRegister}>
                        <h1 className="text-4xl text-center mt-8 mb-16">Register as user</h1>
                    
                        <label className="mb-1">User</label>
                        <input placeholder="Your nick ..." className="pl-2 py-2 mb-6 rounded-lg" onChange={(e) => {setUser(e.target.value)}} required/>
                        <br/>
                        <label className="mb-1">Password</label>
                        <input type="password" placeholder="Your password ..." className="pl-2 py-2 rounded-lg" onChange={(e) => {setPassword(e.target.value)}} required/>
                        <br/>
                        <div className="flex flex-row my-6 justify-around">
                            <button type="submit" className="text-brown-white hover:underline bg-brown-yellow rounded-br-lg rounded-tl-lg p-3 2xl:text-lg 2xl:p-4 mb-3" onClick={handleRegister}>Register</button>
                        </div>
                    </form>
                    </div>
                </div>
        </div>
    );
}

export default Home;