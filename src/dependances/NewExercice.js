import React, { useState, useEffect, useRef } from 'react'
import { Card, Button } from 'react-bootstrap'
import {  useHistory } from 'react-router-dom';
import { useAuth } from './context/AuthContext'
import firebase from "./firebase/firebaseConfig";
import { ratioMuscu } from "./database/ratio"
import Logo from './dasboardComponent/Logo';
import Progress from './component/Progress';
import SpeProgress from './component/SpeProgress';




export default function NewExercice() {
    const { currentUser } = useAuth();
    const history = useHistory();
    const exerciceRef = useRef('all')
    const [newRef, setNewRef] = useState('all');
    const [speExercice, setSpeExercice] = useState([])
  
  
    useEffect(() => {
        const userExercice = firebase.database().ref(`users/` + currentUser.uid + "/userExercice/exercice")
        userExercice.get().then((snapshot) => {
            let previousList = snapshot.val()
            console.log(previousList)
            if (previousList !== undefined) setSpeExercice(previousList)
        })
    }, [])
    

    const pushExercice = async (e) => {
        const muscu = firebase.database().ref(`users/` + currentUser.uid + "/muscu/newTraining")
        muscu.get().then((snapshot) => {
            let previousList = snapshot.val()
            if (previousList === null) previousList =[]
            previousList.push(e.nativeEvent.target.id)
            console.log(e.nativeEvent.target.id)
            muscu.set(previousList)
            history.push('/newMuscuTrain')
        })

    }
    const pushUserExercice = async (e) => {
        const muscu = firebase.database().ref(`users/` + currentUser.uid + "/muscu/newTraining")
        muscu.get().then((snapshot) => {
            let previousList = snapshot.val()
            if (previousList === null) previousList =[]
            let buffer = parseInt(e.nativeEvent.target.id) + 1000
           
            previousList.push(buffer.toString())
            console.log(previousList)
            muscu.set(previousList)
            history.push('/newMuscuTrain')
        })

    }

const back = () => {
    history.push('/newMuscuTrain')
}

    const onChange = () => {

        setNewRef(exerciceRef.current.value)
    }
    return (
        <div>
            <Logo />
            <Card>
                <Card.Body>
                    <label>catégorie</label>
                    <select className = "custom-select" onChange={onChange} aria-label="Exercice catégorie" ref={exerciceRef}>
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

                    {ratioMuscu.Strength && ratioMuscu.Strength.map((item, index) => {
                        if (item.type === newRef || newRef === 'all')
                            return (
                                <Card key={index}>
                                    <Card.Body className=' d-flex flex-column  align-items-center'  >
                                        <div className={item.type} />
                                        <Button variant="info" className="mt-3 " id={index} onClick={pushExercice}>{item.name.Fr}</Button>
                                        <div className = 'w-300 mt-3'>
                                <Progress exercice = {parseInt(item?.id)}/>
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
                                        <Button variant="info" className="mt-3 " id={item.id} onClick={pushUserExercice}>{item.name}</Button>
                                        <div className='w-300 mt-3'>
                                            <SpeProgress exercice = {parseInt(item?.id)}/>
                                        </div>
                                    </Card.Body>
                                </Card>
                            )
                    })}
                    <div className = 'mt-3'>
                    <Button variant="secondary" className=" " onClick={back}>retour</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
