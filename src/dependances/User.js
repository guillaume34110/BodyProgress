import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap'
import firebase from "./firebase/firebaseConfig";
import { useAuth } from './context/AuthContext'
import { useHistory } from "react-router-dom"
import Logo from './dasboardComponent/Logo';

export default function User() {
    const nameRef = useRef()
    const ageRef = useRef()
    const heightRef = useRef()
    const weightRef = useRef()
    const sexRef = useRef()
    const [loading, setLoading] = useState(false)
    const { currentUser } = useAuth();
    const [error, setError] = useState('')
    const history = useHistory()

    useEffect(() => {
        const userData = firebase.database().ref(`users/` + currentUser.uid + "/info")
        userData.get().then((snapshot) => {
            let previousList = snapshot.val()
            if (previousList !== undefined && previousList !== null) {
                nameRef.current.value = previousList.name;
                ageRef.current.value = parseInt(previousList.age);
                heightRef.current.value = parseInt(previousList.height);
                weightRef.current.value = parseInt(previousList.weight);
                sexRef.current.value = parseInt(previousList.sex);
            }
        })
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            var check = /^[A-Za-z]\w{2,12}$/
            var numberCheck = /^[0-9]\w/
            if (nameRef.current.value.match(check)) {
                const userName = firebase.database().ref(`users/` + currentUser.uid + "/info/name")
                userName.set(nameRef.current.value)
            }else{
                setLoading(false)
                return setError("nom d'utilisateur incorect ,pas de carctéres spéciaux et entre 3 et 12 caractéres")
            }
            if (ageRef.current.value > 0 && ageRef.current.value < 120 && ageRef.current.value.match(numberCheck)) {
            const userAge = firebase.database().ref(`users/` + currentUser.uid + "/info/age")
            userAge.set(ageRef.current.value)
        }else{
            setLoading(false)
            return setError("age invalide doit étre compris entre 0 et 120 ans")
        }
        if (heightRef.current.value > 60 && heightRef.current.value < 260 && heightRef.current.value.match(numberCheck) ) {
            const userHeight = firebase.database().ref(`users/` + currentUser.uid + "/info/height")
            userHeight.set(heightRef.current.value)
        }else{
            setLoading(false)
            return setError("taille invalide doit étre compris entre 60 et 260 cm")
        }
        if (weightRef.current.value > 20 && weightRef.current.value < 300  && weightRef.current.value.match(numberCheck)) {
            const userWeight = firebase.database().ref(`users/` + currentUser.uid + "/info/weight")
            userWeight.set(weightRef.current.value)
        }else{
            setLoading(false)
            return setError("poids invalide doit étre compris entre 20 et 300 kg")
        }
            const userSex = firebase.database().ref(`users/` + currentUser.uid + "/info/sex")
            console.log(sexRef)
            userSex.set(sexRef.current.value)
            history.push("/")
        } catch {
            setError('erreur de la base donnée')
        }
        setLoading(false)
    }

    const mainpage = () => {
        history.push('/')
    }
    const updateProfile = () => {
        history.push('/update-profile')
    }

    return (
        <div>
            <Logo />
            <Card>
                <Card.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form >
                        <Form.Group id="name">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control id="nameForm" type="text" ref={nameRef} required />
                        </Form.Group>
                        <Form.Group id="age">
                            <Form.Label>Age</Form.Label>
                            <Form.Control id="ageForm" type="number" ref={ageRef} required />
                        </Form.Group>
                        <Form.Group id="height">
                            <Form.Label>Taille</Form.Label>
                            <Form.Control id="heightForm" type="number" ref={heightRef} required />
                        </Form.Group>
                        <Form.Group id="weight">
                            <Form.Label>Poids</Form.Label>
                            <Form.Control id="weightForm" type="number" ref={weightRef} required />
                        </Form.Group>
                        <select id="sexForm" aria-label="sex-selection" className="custom-select mb-4" ref={sexRef} >
                            <option value="1">femelle</option>
                            <option value="2">male</option>
                        </select>
                        <div className='d-flex justify-content-around'>
                            <Button disabled={loading} type="button" onClick={handleSubmit}>mettre a jour</Button>
                            <Button onClick={mainpage} variant="secondary" type="button"> Page d'acceuil </Button>
                        </div>
                        <div className="w-100 text-center logout">
                            
                            <div onClick={updateProfile}>mettre a jour les données d'authentifications</div>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
