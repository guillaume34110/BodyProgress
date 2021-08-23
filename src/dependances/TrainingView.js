import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import {  useHistory } from 'react-router-dom';
import { useAuth } from './context/AuthContext'
import firebase from "./firebase/firebaseConfig";
import Logo from './dasboardComponent/Logo';
import { thisTraining } from './MainMusculation'
import { ratioMuscu } from "./database/ratio"
import Progress from './component/Progress'
import SpeProgress from './component/SpeProgress';
export let thisExercice = []

export default function TrainingView() {
    const { currentUser } = useAuth();
    const history = useHistory();
    const [muscuTrainings, setMuscuTraining] = useState([])

    useEffect(() => {
        const userExo = firebase.database().ref(`users/` + currentUser.uid + "/userExercice/exercice")
        userExo.get().then((snapshot) => {
            let userExoList = snapshot.val()
            if (userExoList === null || userExoList == undefined) userExoList =[];
            const training = firebase.database().ref(`users/` + currentUser.uid + "/muscu/train/" + thisTraining)
            training.get().then((snapshot) => {
                let previousList = snapshot.val()
                console.log(previousList)
                if (previousList.exercices !== null) {
                    for (let i = 0; i < previousList.exercices.length; i++) {
                        let value = parseInt(previousList.exercices[i])
                        if (value < 1000) {
                            const exercice = ratioMuscu.Strength[previousList.exercices[i]]
                            exercice.id = previousList.exercices[i]
                            exercice.title = 'native'
                            previousList.exercices.splice(i, 1, exercice)
                        } else {
                            value -= 1000
                            if (userExoList[value] !== undefined && userExoList[value] !== null){
                            userExoList[value].title = 'user'
                            previousList.exercices.splice(i, 1, userExoList[value])
                            }
                            else{
                                previousList.exercices.splice(i, 1)
                            }
                        }


                    }
                    if (previousList !== undefined) setMuscuTraining(previousList)
                    console.log(previousList)
                }

            })
        })

    }, [])
    const viewExercice = (e) => {
        console.log(e.nativeEvent)
        if (e.nativeEvent.target.title === 'native') {
            thisExercice[0] = e.nativeEvent.target.id
            history.push('/viewExercice')
        } else if (e.nativeEvent.target.title === 'user') {
            thisExercice[0] = e.nativeEvent.target.id
            history.push('/viewUserExercice')
        }
    }

    const mainpage = () => {
        history.push('/mainMusculation')
    }
    return (
        <div>
            <Logo />
            <Card >
                <Card.Body>
                    <h2>{muscuTrainings?.name}</h2>
                    {muscuTrainings?.exercices && muscuTrainings.exercices.map((item, index) => {
                        return (
                            <Card key={index}>
                                <Card.Body className=' d-flex  flex-column  align-items-center '  >
                                    <Button variant="info" title={item.title} id={item?.id} onClick={viewExercice}>{item.name?.Fr || item?.name}</Button>
                                    <div className='w-300'>
                                        {item.male && <Progress exercice={parseInt(item?.id)} />}
                                        {item.cookieGold && <SpeProgress exercice={parseInt(item?.id)} />}
                                    </div>
                                </Card.Body>
                            </Card>
                        )
                    })}
                    <div className='mt-3 d-flex   align-items-center justify-content-center' >
                        <Button onClick={mainpage} class="  btn-block" variant="secondary" type="return"> retour </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
