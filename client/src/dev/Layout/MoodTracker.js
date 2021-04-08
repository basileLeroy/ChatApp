import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'


const MoodTracker = () => {

    const { id } = useParams();
    const [feeling, setFeeling] = useState('');
    // const [energy, setEnergy] = useState('');
    // const [physical, setPhysical] = useState('');
    // const [motivation, setMotivation] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/api/profile/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json,  charset=UTF-8', 
                'Accept': 'application/json, text/html',
            },
            credentials: 'include', 
        })
        .then(res => res.json())
        .then((res) => {
           setFeeling(res[0].feeling);
        });
    }, [id]);

    const moodtrackerHandler = () => { 

        console.log(feeling)
 
        fetch(`http://localhost:5000/api/moodtracker/${id}`, {
            method: 'POST',
            body:  JSON.stringify({
                feeling: feeling,
                // energy: energy,
            }),
            headers: {
                'Accept': 'multipart/form-data',
            },
            credentials: 'include',
        })
        .then(res => res.json())
        .then(data => {console.log(data)})
        .catch(error => {
            console.error(error)  
        })
    }

    return (
        
        <section className=" hidden lg:flex bg-brown-sand bg-opacity-25 w-1/3 min-h-full h-auto" id="right">
            <div className="flex justify-around w-full my-6">
                <div className="flex flex-col bg-brown-white rounded-xl w-3/5 h-moodTracker max-h-moodTracker justify-between top-10 sticky shadow-lg">
                    <div className="flex flex-col">
                        <h1 className="text-2xl text-center w-full my-5"> Today </h1>
                        <div className="bg-brown-sand rounded-xl bg-opacity-25 m-1 py-3">
                            <h5 className="text-center w-full"> Feeling? </h5>
                            <div className="flex flex-row justify-center w-full"> 
                            
                                <label htmlFor="happyFeeling">
                                    <input type="radio" name="feeling" checked={feeling === 'happy'} id="happyFeeling" value="happy" className="happy opacity-0 absolute" onClick={moodtrackerHandler} onChange={(e) => {setFeeling(e.target.value)}}/> 
                                    <svg className="hover:fill-current hover:text-green-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><circle cx="8.5" cy="10.5" r="1.5"></circle><circle cx="15.493" cy="10.493" r="1.493"></circle><path d="M12,18c4,0,5-4,5-4H7C7,14,8,18,12,18z"></path></svg>
                                </label> 
                                <label htmlFor="neutralFeeling">
                                    <input type="radio" name="feeling" checked={feeling === 'neutral'} id="neutralFeeling" value="neutral" className="neutral opacity-0 absolute" onClick={moodtrackerHandler} onChange={(e) => {setFeeling(e.target.value)}}/> 
                                    <svg className="hover:fill-current hover:text-yellow-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.486,2,2,6.486,2,12c0,5.514,4.486,10,10,10s10-4.486,10-10C22,6.486,17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z"></path><circle cx="8.5" cy="10.5" r="1.5"></circle><circle cx="15.493" cy="10.493" r="1.493"></circle><path d="M7.974 15H16V17H7.974z"></path></svg>
                                </label>
                                <label htmlFor="sadFeeling">
                                    <input type="radio" name="feeling" checked={feeling === 'sad'} id="sadFeeling" value="sad" className="sad opacity-0 absolute" onClick={moodtrackerHandler} onChange={(e) => {setFeeling(e.target.value)}}/> 
                                    <svg className="hover:fill-current hover:text-red-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><circle cx="8.5" cy="10.5" r="1.5"></circle><circle cx="15.493" cy="10.493" r="1.493"></circle><path d="M12,14c-3,0-4,3-4,3h8C16,17,15,14,12,14z"></path></svg>
                                </label> 
                            </div>
                        </div>
                        <div className="bg-brown-sand rounded-xl bg-opacity-25 m-1 py-3">
                            <h5 className="text-center w-full"> Energy? </h5>
                            <div className="flex flex-row justify-center w-full"> 
                                <label htmlFor="happyEnergy">
                                    <input type="radio" name="energie" id="happyEnergy" value="happy" className="happy hidden"/> 
                                    <svg className="hover:fill-current hover:text-green-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><circle cx="8.5" cy="10.5" r="1.5"></circle><circle cx="15.493" cy="10.493" r="1.493"></circle><path d="M12,18c4,0,5-4,5-4H7C7,14,8,18,12,18z"></path></svg>
                                </label>
                                <label htmlFor="neutralEnergy">
                                    <input type="radio" name="energie" id="neutralEnergy" value="neutral" className="neutral opacity-0 absolute"/> 
                                    <svg className="hover:fill-current hover:text-yellow-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.486,2,2,6.486,2,12c0,5.514,4.486,10,10,10s10-4.486,10-10C22,6.486,17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z"></path><circle cx="8.5" cy="10.5" r="1.5"></circle><circle cx="15.493" cy="10.493" r="1.493"></circle><path d="M7.974 15H16V17H7.974z"></path></svg>
                                </label>
                                <label htmlFor="sadEnergy">
                                    <input type="radio" name="energie" id="sadEnergy" value="sad" className="sad opacity-0 absolute"/> 
                                    <svg className="hover:fill-current hover:text-red-600"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><circle cx="8.5" cy="10.5" r="1.5"></circle><circle cx="15.493" cy="10.493" r="1.493"></circle><path d="M12,14c-3,0-4,3-4,3h8C16,17,15,14,12,14z"></path></svg>                                  
                                </label>
                            </div>
                        </div>
                        <div className="bg-brown-sand rounded-xl bg-opacity-25 m-1 py-3">
                            <h5 className="text-center w-full"> Physical? </h5>
                            <div className="flex flex-row justify-center w-full"> 
                                <label htmlFor="happyPhysical">
                                    <input type="radio" name="physical" id="happyPhysical" value="happy" className="happy opacity-0 absolute" /> 
                                    <svg className="hover:fill-current hover:text-green-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><circle cx="8.5" cy="10.5" r="1.5"></circle><circle cx="15.493" cy="10.493" r="1.493"></circle><path d="M12,18c4,0,5-4,5-4H7C7,14,8,18,12,18z"></path></svg>                                 
                                </label>

                                <label htmlFor="neutralPhysical">
                                    <input type="radio" name="physical" id="neutralPhysical" value="neutral" className="neutral opacity-0 absolute"/> 
                                    <svg className="hover:fill-current hover:text-yellow-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.486,2,2,6.486,2,12c0,5.514,4.486,10,10,10s10-4.486,10-10C22,6.486,17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z"></path><circle cx="8.5" cy="10.5" r="1.5"></circle><circle cx="15.493" cy="10.493" r="1.493"></circle><path d="M7.974 15H16V17H7.974z"></path></svg> 
                                </label>

                                <label htmlFor="sadPhysical">
                                    <input type="radio" name="physical" id="sadPhysical" value="sad" className="sad opacity-0 absolute"/> 
                                    <svg className="hover:fill-current hover:text-red-600"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><circle cx="8.5" cy="10.5" r="1.5"></circle><circle cx="15.493" cy="10.493" r="1.493"></circle><path d="M12,14c-3,0-4,3-4,3h8C16,17,15,14,12,14z"></path></svg>
                                </label>
                            </div>
                        </div>
                        <div className="bg-brown-sand rounded-xl bg-opacity-25 m-1 py-3">
                            <h5 className="text-center w-full"> Motivation? </h5>
                            <div className="flex flex-row justify-center w-full"> 
                                <label htmlFor="happyMotivation">
                                    <input type="radio" name="motivation" id="happyMotivation" value="happy" className="happy opacity-0 absolute"/> 
                                    <svg className="hover:fill-current hover:text-green-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><circle cx="8.5" cy="10.5" r="1.5"></circle><circle cx="15.493" cy="10.493" r="1.493"></circle><path d="M12,18c4,0,5-4,5-4H7C7,14,8,18,12,18z"></path></svg> 
                                </label>

                                <label htmlFor="neutralMotivation">
                                    <input type="radio" name="motivation" id="neutralMotivation" value="neutral" className="neutral opacity-0 absolute"/> 
                                    <svg className="hover:fill-current hover:text-yellow-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.486,2,2,6.486,2,12c0,5.514,4.486,10,10,10s10-4.486,10-10C22,6.486,17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z"></path><circle cx="8.5" cy="10.5" r="1.5"></circle><circle cx="15.493" cy="10.493" r="1.493"></circle><path d="M7.974 15H16V17H7.974z"></path></svg> 
                                </label>

                                <label htmlFor="sadMotivation">
                                    <input type="radio" name="motivation" id="sadMotivation" value="sad" className="sad opacity-0 absolute"/> 
                                    <svg className="hover:fill-current hover:text-red-600"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><circle cx="8.5" cy="10.5" r="1.5"></circle><circle cx="15.493" cy="10.493" r="1.493"></circle><path d="M12,14c-3,0-4,3-4,3h8C16,17,15,14,12,14z"></path></svg>                                
                                </label>               
                            </div>
                        </div>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white w-18 h-12 py-2 mx-4 px-4 rounded-full my-5"> Friends </button>
                </div>
            </div>
        </section>
    );
}

export default MoodTracker;



