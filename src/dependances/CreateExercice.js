import React, { useState,  useRef } from 'react';
import Logo from './dasboardComponent/Logo'
import { Card, Button, Alert, Form } from 'react-bootstrap'
import firebase from "./firebase/firebaseConfig";
import { useAuth } from './context/AuthContext'
import { useHistory } from "react-router-dom"

export default function CreateExercice() {
    const nameRef = useRef()
    const targetRef = useRef()
    const haltereRef = useRef()
    const bodyWeightRef = useRef()
    const [loading, setLoading] = useState(false)
    const { currentUser } = useAuth();
    const [error, setError] = useState('')
    const history = useHistory()
    const handleSubmit = async (e) => {
       
          e.preventDefault()
        try {
            setError("")
            setLoading(true)
            let target
            var check = /^[A-Za-z' -éèà]{2,22}$/
            var numberCheck = /^[0-9]\w/
            if (haltereRef.current.checked === true) target = haltereRef.current.value
            if (bodyWeightRef.current.checked === true) target = bodyWeightRef.current.value
            let nameBuffer
            if (nameRef.current.value.match(check)) {
            nameBuffer = nameRef.current.value
            }else{
                setLoading(false)
                return setError("nom incorrect, doit erte compris entre 3 et 20 carctéres non spéciaux sauf ( -)")
            }
            let cookieBuffer
            if (targetRef.current.value > 0 && targetRef.current.value < 2000 && targetRef.current.value.match(numberCheck) ){
             cookieBuffer = targetRef.current.value
            }else{
                setLoading(false)
                return setError("objectif incorect, doit etre compris entre 0 et 2000")
           
            }

            const userExercice = firebase.database().ref(`users/` + currentUser.uid + "/userExercice/exercice")
            userExercice.get().then((snapshot) => {
                let previousList = snapshot.val()
                if (previousList === null || previousList === undefined) previousList = []
                const Exercice = { name: nameBuffer, cookieGold: cookieBuffer, lest: target , type: 'user',id:previousList.length}
                previousList.push(Exercice)
                userExercice.set(previousList)
            })
            history.push("/mainMusculation")
        } catch {
            setError('erreur base de donnée')
        }
        setLoading(false)
    }
    const back = () => {
        history.push('/mainMusculation')
    }

    return (
        <div>
            <Logo />
            <Card >
                <Card.Body>
                {error && <Alert variant="danger">{error}</Alert>}
                    <Form>
                        <Form.Group id="name">
                            <Form.Control placeholder="nom de l'exercice" id="nameForm" type="text" ref={nameRef} required/>
                        </Form.Group>
                        <Form.Group id="objective">
                            <Form.Control placeholder="objectif final en kilogramme ou repétitions" id="nameForm" type="number" ref={targetRef}  required/>
                        </Form.Group>
                        <div className=" d-flex justify-content-around flex-row mb-3">
                            <Form.Check ref={haltereRef}  name="drone" type='radio' label='poids et haltéres (kg)' value='1' id='default-radio' checked />
                            <Form.Check ref={bodyWeightRef} name="drone" type='radio' label='poids du corp (rep)' id='' value='2' />
                        </div>
                        <div className ="d-flex justify-content-around">
                        <Button disabled={loading} type="button" onClick={handleSubmit}>crée un exercice</Button>
                        <Button  type="button" variant = "secondary"onClick={back}>retour</Button>
                    </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
