import React, { useState, useEffect, useRef } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { useAuth } from './context/AuthContext'
import firebase from "./firebase/firebaseConfig";
import { ratioMuscu } from "./database/ratio"
import Logo from './dasboardComponent/Logo';
import Progress from './component/Progress';
import { thisExercice } from './TrainingView'
import SpeProgress from './component/SpeProgress';



export default function FullExercice() {
    const { currentUser } = useAuth();
    const history = useHistory();
    const exerciceRef = useRef('all')
    const [newRef, setNewRef] = useState('all');
    const [muscuTraining, setMuscuTraining] = useState([])
    const [speExercice, setSpeExercice] = useState([])

    useEffect(() => {
        const userExercice = firebase.database().ref(`users/` + currentUser.uid + "/userExercice/exercice")
        userExercice.get().then((snapshot) => {
            let previousList = snapshot.val()
            console.log(previousList)
            if (previousList !== undefined) setSpeExercice(previousList)
        })
    }, [])


    const viewExercice = async (e) => {
        thisExercice[0] = e.nativeEvent.target.id
        history.push('/viewExercice')
    }
    const viewUserExercice = async (e) => {
        thisExercice[0] = e.nativeEvent.target.id
        history.push('/viewUserExercice')
    }


    const back = () => {
        history.push('/mainMusculation')
    }
    const removeExercice = async (e) => {
        if (window.confirm('êtest vous sur de vouloir effacer')) {
            let trainingList = []
            if (speExercice !== null && speExercice !== undefined) {
                for (let i = 0; i < speExercice.length; i++) {
                    trainingList.push(speExercice[i])

                }

                trainingList.splice(e.nativeEvent.target.id, 1)
                for (let i = 0 ; i< trainingList.length;i++){
                    trainingList[i].id = i
                }
                console.log(trainingList)

                const userExercice = firebase.database().ref(`users/` + currentUser.uid + "/userExercice/exercice/")
                userExercice.set(trainingList)
                userExercice.get().then((snapshot) => {
                    let userExerciceList = snapshot.val()
                    setSpeExercice(userExerciceList)
                })
                const stats = firebase.database().ref(`users/` + currentUser.uid + "/userExercice/stats/" )
                stats.get().then((snapshot) => {
                    let statList = snapshot.val()
                    console.log(statList)
                    if (statList !== null && statList !== undefined){
                    statList.splice(e.nativeEvent.target.id, 1)
                    stats.set(statList)
                    }
                })
            }
        } else { return }
    }

    const onChange = () => {

        setNewRef(exerciceRef.current.value)
    }
    return (
        <div>
            <Logo />
            <Card>
                <Card.Body>
                    <div className=" mb-3 d-flex justify-content-around">

                        <select className="custom-select select-small" onChange={onChange} aria-label="Exercice catégorie" ref={exerciceRef}>
                            <option value="all">Tous les exercices</option>
                            <option value="arm">bras</option>
                            <option value="chest">buste</option>
                            <option value="back">dos</option>
                            <option value="leg">jambes</option>
                            <option value="shoulder">épaules</option>
                            <option value="weightlifting">haltérophilie</option>
                            <option value="calf">molets</option>
                            <option value="abs">abdominaux</option>
                            <option value="user">custom</option>
                        </select>
                        <Button variant="secondary" className=" " onClick={back}>retour</Button>
                    </div>
                    {ratioMuscu.Strength && ratioMuscu.Strength.map((item, index) => {
                        if (item.type === newRef || newRef === 'all')
                            return (
                                <Card key={index}>
                                    <Card.Body className=' d-flex flex-column  align-items-center'  >
                                        <div className={item.type} />
                                        <Button variant="info" className="mt-3 " id={item.id} onClick={viewExercice}>{item.name.Fr}</Button>
                                        <div className='w-300 mt-3'>
                                            <Progress exercice={parseInt(item?.id)} />
                                        </div>
                                    </Card.Body>
                                </Card>
                            )
                    })}
                    {speExercice && speExercice.map((item, index) => {
                        if (item.type === newRef || newRef === 'all')
                            return (
                                <Card key={index}>
                                    <Card.Body className=' d-flex flex-column  align-items-center'  >
                                        <div className={item.type} />
                                        <div className=" d-flex flex-row justify-content-around w-100">
                                            <Button variant="info" className="mt-3 " id={item.id} onClick={viewUserExercice}>{item.name}</Button>
                                            <Button variant="danger" className="mt-3 " id={index} onClick={removeExercice} >X</Button>
                                        </div>
                                        <div className='w-300 mt-3'>
                                            <SpeProgress exercice={parseInt(item?.id)} />
                                        </div>
                                    </Card.Body>
                                </Card>
                            )
                    })}

                    <div className=" mt-3 d-flex justify-content-center">
                        <Button variant="secondary" className=" " onClick={back}>retour</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
