import React, { useState, useEffect, useRef } from 'react'
import { Card, Button, Form,Alert } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { useAuth } from './context/AuthContext'
import firebase from "./firebase/firebaseConfig";
import Logo from './dasboardComponent/Logo';
import { ratioMuscu } from "./database/ratio"
import Progress from './component/Progress';
import SpeProgress from './component/SpeProgress';

export default function NewMuscuTrain() {
    const { currentUser } = useAuth();
    const history = useHistory();
    const [muscuTraining, setMuscuTraining] = useState([])
    const trainingNameRef = useRef()
    const [error, setError] = useState('')


    useEffect(() => {
        const userExercice = firebase.database().ref(`users/` + currentUser.uid + "/userExercice/exercice/")
        userExercice.get().then((snapshot) => {
            let userExerciceList = snapshot.val()
            const muscu = firebase.database().ref(`users/` + currentUser.uid + "/muscu/newTraining")
            muscu.get().then((snapshot) => {
                let previousList = snapshot.val()
                console.log(previousList)
                if (previousList !== null) {
                    for (let i = 0; i < previousList.length; i++) {
                        if (previousList[i] < 1000) {
                            const exercice = ratioMuscu.Strength[previousList[i]]
                            exercice.id = previousList[i]
                            previousList.splice(i, 1, exercice)
                        }
                        if (previousList[i] >= 1000) {
                            previousList[i] = previousList[i] - 1000
                            previousList.splice(i, 1, userExerciceList[previousList[i]])
                        }
                    }
                    if (previousList !== undefined) setMuscuTraining(previousList)
                }
            })
        })
    }, [])

    const newExercice = () => {
        history.push('/newExercice')
    }

    const saveTraining = () => {
        var check = /^[A-Za-z' -éèà]{2,22}$/
        let nameBuffer
        if (trainingNameRef.current.value.match(check)) {
            nameBuffer = trainingNameRef.current.value
            }else{
                
                return setError("nom incorrect, doit erte compris entre 3 et 20 carctéres non spéciaux sauf ( -)")
            }
        let TrainingList = []
        if (muscuTraining !== null && muscuTraining !== undefined) {
            for (let i = 0; i < muscuTraining.length; i++) {
                if (muscuTraining[i].male !== undefined && muscuTraining[i].male !== null) TrainingList.push(muscuTraining[i].id)
                if (muscuTraining[i].cookieGold !== undefined && muscuTraining[i].cookieGold !== null) {
                    let buffer = parseInt(muscuTraining[i].id)
                    buffer += 1000

                    TrainingList.push(buffer.toString())
                }
            }
        }

        let folder = { name: nameBuffer, exercices: TrainingList }
        if (nameBuffer.length >= 2 && nameBuffer.length < 22) {
            const createNewTraining = firebase.database().ref(`users/` + currentUser.uid + "/muscu/train")
            createNewTraining.get().then((snapshot) => {
                let previousList = snapshot.val()
                if (previousList === null) previousList = []
                previousList.push(folder)
                createNewTraining.set(previousList)
                const newtrainingPage = firebase.database().ref(`users/` + currentUser.uid + "/muscu/newTraining")
                newtrainingPage.set([])
                history.push('/mainMusculation')

            })

        }

    }

    const removeExercice = async (e) => {
        if (window.confirm('êtest vous sur de vouloir effacer')) {

            let TrainingList = []
            if (muscuTraining !== null && muscuTraining !== undefined) {
                for (let i = 0; i < muscuTraining.length; i++) {
                    if (muscuTraining[i].male !== undefined && muscuTraining[i].male !== null) TrainingList.push(muscuTraining[i].id)
                    if (muscuTraining[i].cookieGold !== undefined && muscuTraining[i].cookieGold !== null) {
                        console.log(i, muscuTraining[i].cookieGold, 'cookieGold')
                        let buffer = parseInt(muscuTraining[i].id)
                        buffer += 1000

                        TrainingList.push(buffer.toString())
                    }
                }
            }
            TrainingList.splice(e.nativeEvent.target.id, 1)
            const userExercice = firebase.database().ref(`users/` + currentUser.uid + "/userExercice/exercice/")
            userExercice.get().then((snapshot) => {
                let userExerciceList = snapshot.val()
                const newTrainingList = firebase.database().ref(`users/` + currentUser.uid + "/muscu/newTraining")
                newTrainingList.set(TrainingList)

                newTrainingList.get().then((snapshot) => {
                    let previousList = snapshot.val()
                    if (previousList !== null) {
                        for (let i = 0; i < previousList.length; i++) {
                            if (previousList[i] < 1000) {
                                const exercice = ratioMuscu.Strength[previousList[i]]
                                exercice.id = previousList[i]
                                previousList.splice(i, 1, exercice)
                            }
                            if (previousList[i] >= 1000) {
                                previousList[i] = previousList[i] - 1000
                                previousList.splice(i, 1, userExerciceList[previousList[i]])
                            }
                        }
                        if (previousList !== undefined) setMuscuTraining(previousList)
                    } else {
                        setMuscuTraining([])
                    }
                })
            })
        } else { return }
    }
    const mainpage = () => {
        history.push('/')
    }
    return (
        <div>
            <Logo />
            <Card>
                <Card.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form>
                        <Form.Group id="name">
                            <Form.Control placeholder="nom de l'entrainement" type="name" ref={trainingNameRef} required />
                        </Form.Group>
                    </Form>
                    <div className='mb-3 d-flex justify-content-center'>
                        <Button variant="success" onClick={newExercice} >ajouter nouvel exercice</Button>

                    </div>
                    {muscuTraining && muscuTraining.map((item, index) => {
                        return (
                            <Card key={index}>
                                <Card.Body className=''  >
                                    <div className=' d-flex  flex-row justify-content-between align-items-center '>
                                        <div className={item.type} />
                                        <Button variant="info" className=" "  >{item.name?.Fr || item.name}</Button>
                                        <Button variant="danger" className=" " id={index} onClick={removeExercice} >X</Button>
                                    </div>
                                    <div className='w-300 mt-4'>
                                        {item.male && <Progress exercice={parseInt(item?.id)} />}
                                        {item.cookieGold && <SpeProgress exercice={parseInt(item?.id)} />}
                                    </div>
                                </Card.Body>
                            </Card>
                        )
                    })}

                    <div className='mt-3 d-flex justify-content-around '>
                        <Button onClick={mainpage} class="  btn-block" variant="secondary" type="return"> Page d'acceuil </Button>
                        <Button variant="primary" onClick={saveTraining} >sauvegarder</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
