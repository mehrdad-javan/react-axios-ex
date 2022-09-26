import axios from 'axios';
import React, { useState } from 'react';
import AlertMessage from './AlertMessage';
import DataTable from './DataTable';

const App = () => {
    const API_URL = "http://localhost:8080/api/v1/person";

    const [persons, setPersons] = useState([]);
    const [alert,setAlert] = useState({type: '', message: ''});

    // JS by default is a synchronous scripting language 
    const getAllPeopleAction = async () => {
        await axios.get(API_URL).then(resposne => {
            if(resposne.status === 200){
                setPersons(resposne.data);
                setAlert({type: 'alert-success', message: 'Get API Operation is Done!'})
            } else {
                setAlert({type: 'alert-warning', message: 'APE Error ' + resposne.status})
            }
        }).catch(err => {
            setAlert({type: 'alert-danger', message: 'Error'})
        })
    }

    const createPersonAction = async () => {
        const data = { firstName: 'Test', lastName: 'test', email: 'test.test@test.se', title: 'Test Title'}
        //axios.post().then(response => {}).catch(error => {});
       await axios.post(API_URL, data).then(response => {
            if(response.status === 201){
                setAlert({type: 'alert-success', message: 'Post API Operation is Done!'}) 
            } else {
                setAlert({type: 'alert-warning', message: 'APE Error ' + response.status})
            }
        }).catch(error => {
            setAlert({type: 'alert-danger', message: 'Error'})
        });

    }

    const updatePersonData = async() => {
        const data = {id: 1, firstName: 'Test1', lastName: 'test1', email: 'test1.test1@test.se', title: 'Test1 Title'}
        await axios.put(API_URL, data).then(response => {
            if(response.status === 204){
                setAlert({type: 'alert-success', message: 'Put API Operation is Done!'})
            } else {
                setAlert({type: 'alert-warning', message: 'APE Error ' + response.status})
            }
        }).catch(error => {
            setAlert({type: 'alert-danger', message: 'Error'})

        });

    }

    const getPersonById = async() => {
        const id = 2;
        await axios.get(API_URL + '/' + id).then(response=> {
            if(response.status === 200){
                console.log("RESPONSE:", response.data);
                setAlert({type: 'alert-success', message: 'GetAPIById Operation is Done!'})
            } else {
                setAlert({type: 'alert-warning', message: 'APE Error ' + response.status}) 
            }
        }).catch(error => {
            setAlert({type: 'alert-danger', message: 'Error'})

        });
    }




    return (
        <div className='container'>
           <h3> Axios Example</h3>
            <AlertMessage alert={alert} />
            <div className='row'>
                <div className='col'>
                    <button type='button' className='btn btn-primary' onClick={getAllPeopleAction} >Get Operation</button>
                </div>
                <DataTable persons={persons} />

                <hr/>
                <div className='col'>
                    <button type='button' className='btn btn-success' onClick={createPersonAction} >Post Operation</button>
                </div>

                
                <hr/>
                <div className='col'>
                    <button type='button' className='btn btn-warning' onClick={updatePersonData} >Put Operation</button>
                </div>


                
                <hr/>
                <div className='col'>
                    <button type='button' className='btn btn-info' onClick={getPersonById} >Get By Id Operation</button>
                </div>
            </div>
        </div>
    );
};

export default App;