import React from 'react'
import {  Button } from 'react-bootstrap'
import { useHistory } from "react-router-dom"




export default function UserInfo({ userData }) {

    const history = useHistory()
    const userRoute = () => {
        history.push('/user')
    }

    return (
        <div>
            <div className=' mt-3  d-flex flex-column justify-content-center' >
                <Button onClick={userRoute} variant="info">Information Utilisateur</Button>
                <div className=' mt-3 d-flex flex-row justify-content-around'>
                    <p> <strong>nom:</strong>{userData.name}  </p>
                    <p> <strong>poids:</strong>{userData.weight} </p>
                    <p> <strong>age:</strong>{userData.age} </p>
                    <div className={'sex' + userData.sex} />
                </div>
            </div>

        </div>
    )
}
