import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg'
import feed from '../assets/images/feed.svg';
import chatroom from '../assets/images/chatroom.svg';
import forums from '../assets/images/forums.svg';
import settings from '../assets/images/settings.svg';
import logout from '../assets/images/logout.svg';

import notifications from '../assets/images/notifications-none.svg';
import messages from '../assets/images/messages-none.svg';

import search from '../assets/images/search.svg';
import finger from '../assets/images/finger.svg';


const Header = ({user}) => {

    const [keyword, setKeyword] = useState('');
    
    const seeMenu = () => {
        const x = document.getElementById("mobile-menu");
        if (x.className === "hidden") {
            x.className = "block";
        } else {
            x.className = "hidden";
        }
    }
    const seeProfile = () => {
        const x = document.getElementById("profile-dropdwn");
        if (x.className === "hidden") {
            x.classList.remove("hidden");
            x.className = "block";
            
        } else {
            x.classList.remove("block");
            x.className = "hidden";
        }
    }

    const logOut = () => {

        fetch("http://localhost:5000/api/logout", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json,  charset=UTF-8', 
                'Accept': 'application/json, text/html',
            },
            credentials: 'include', 
        })
        .then(res => res.json())
        .then(res => console.log(res));

        localStorage.removeItem('loggedIn');
        localStorage.removeItem('userID');
        window.location.href = "/";
    }


    return (
        <>
        <div className="sm:sticky top-0 z-50">
            <nav className="bg-brown-clay text-white">
                <div className="mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="md:flex-1 flex items-center justify-center w-sm sm:justify-start">
                            <div className="flex items-center">
                                <div className="flex flex-row" id="logo">
                                    <Link to="/" className="flex flex-row h-10">
                                        <img src={logo} alt="Logo"/>
                                        <h1 className="flex py-1 text-2xl">ygeia</h1>
                                    </Link>
                                    <div className="flex flex-row md:w-full" id="search">
                                        <input type="search" placeholder="Search.." className="rounded-xl pl-4 w-2/5 md:w-full text-black" onChange={(e) => {setKeyword(e.target.value)}}/>
                                        <Link to={`/search/${keyword}`}> <button><img src={search} alt="search" className="h-6 sm:h-8 sm:w-8 ml-2 mt-2"/></button></Link>     
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden lg:block">
                            <div className="flex flex-row justify-around space-x-4 w-full">
                                <ul className="flex flex-row mr-24 items-center w-full">
                                    <li><Link to="/feed"><img src={feed} alt="Feed" className="h-8 w-8 mx-16"/></Link></li>
                                    <li><Link to="/forums"><img src={forums} alt="forums" className="h-8 w-8 mx-16"/></Link></li>
                                    <li><Link to="/chatroom"><img src={chatroom} alt="chatroom" className="h-8 w-8 mx-16"/></Link></li>
                                </ul>

                                <ul className="flex flex-row mr-24">
                                    <li><Link to="#"><img src={notifications} alt="notifications" className="h-8 w-8 mx-6"/></Link></li>
                                    <li><Link to="#"><img src={messages} alt="messages" className="h-8 w-8 mx-6"/></Link></li>
                                </ul>

                                <ul className="flex flex-row mr-24">
                                    <div className=" inset-y-0 right-0 flex items-center mx-16 lg:block">
                                        <button onClick={seeProfile}  type="button" className="inline-flex items-center justify-center p-2 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                    
                                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                            </svg>
                                        
                                        </button>
                                    </div>
                                </ul>
                            </div>
                        </div>

                        <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                            <button onClick={seeMenu}  type="button" className="inline-flex items-center justify-center p-2 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            
                            </button>
                        </div>
                    </div>
                </div>



                <div className="hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 flex justify-evenly items-center flex-col md:flex-row">
                        <ul className="flex flex-col mr-6 justify-end">
                            <li>
                                <Link to="#">
                                    <div className="flex flex-row">
                                        <img src={notifications} alt="notifications" className="h-8 w-8 mx-16"/>
                                        <p>Notifications</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <div className="flex flex-row">
                                        <img src={messages} alt="messages" className="h-8 w-8 mx-16"/>
                                        <p>Messages</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/profile/${user}`}>
                                    <div className="flex flex-row">
                                        <img src={finger} alt="profile" className="h-8 w-8 mx-16"/>
                                        <p>My profile</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>

            <div className="lg:hidden bg-brown-sand py-4" id="mobile-subnav">
                <div className="relative items-center">
                    <div className="flex flex-row justify-around w-full">
                        <ul className="flex flex-row items-center">
                            <li><Link to="/feed"><img src={feed} alt="Feed" className="h-10 w-10 mx-16"/></Link></li>
                            <li><Link to="/forums"><img src={forums} alt="forums" className="h-10 w-10 mx-16"/></Link></li>
                            <li><Link to="/chatroom"><img src={chatroom} alt="chatroom" className="h-10 w-10 mx-16"/></Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="hidden w-64 mt-2" id="profile-dropdwn">
                <div className="absolute right-0 px-2 pt-2 pb-3 mt-2 flex justify-evenly w-64 items-center flex-col md:flex-row rounded-xl border border-brown-clay bg-brown-navajo">
                    <ul className="flex flex-col justify-end w-full">
                        <li>
                            <Link to={`/profile/${user}`}>
                                <div className="flex flex-row items-center rounded-xl cursor-pointer hover:bg-brown-yellow">
                                    <img src={finger} alt="profile" className="h-8 w-8 mx-8 my-2"/>
                                    <p>My profile</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/profile/${user}`}>
                                <div className="flex flex-row items-center rounded-xl cursor-pointer hover:bg-brown-yellow">
                                    <img src={settings} alt="settings" className="h-8 w-8 mx-8 my-2"/>
                                    <p>Settings</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={logOut} to="#" >
                                <div  className="flex flex-row items-center rounded-xl cursor-pointer hover:bg-brown-yellow">
                                    <img src={logout} alt="Log Out" className="h-8 w-8 mx-8 my-2"/>
                                    <p>Log Out</p>
                                </div>
                            </Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
        </>
    );
}

export default Header;