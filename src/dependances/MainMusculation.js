import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import {  useHistory } from 'react-router-dom';
import { useAuth } from './context/AuthContext'
import firebase from "./firebase/firebaseConfig";
import Logo from './dasboardComponent/Logo';

export let thisTraining

export default function MainMusculation() {
    const { currentUser } = useAuth();
    const history = useHistory();
    const [muscuTrainings, setMuscuTraining] = useState([])

    useEffect(() => {
        const muscu = firebase.database().ref(`users/` + currentUser.uid + "/muscu/train")
        muscu.get().then((snapshot) => {
            let previousList = snapshot.val()
            console.log(previousList)
            if (previousList !== undefined) setMuscuTraining(previousList)
        })

    }, [])

    const removeTraining = async (e) => {
        if (window.confirm('êtest vous sur de vouloir effacer')) {
          
          
          
        let TrainingList = []
        if (muscuTrainings !== null && muscuTrainings !== undefined) {
            for (let i = 0; i < muscuTrainings.length; i++) {
                TrainingList.push(muscuTrainings[i])

            }
            
            TrainingList.splice(e.nativeEvent.target.id, 1)
            console.log(TrainingList)
            
            const userExercice = firebase.database().ref(`users/` + currentUser.uid + "/muscu/train/")
            userExercice.set(TrainingList)
            userExercice.get().then((snapshot) => {
                let userExerciceList = snapshot.val()
                setMuscuTraining(userExerciceList)
            })
        }
    } else {
        // Do nothing!
        return
      }
    }
    const newTraining = () => {
        history.push('/newMuscuTrain')
    }
    const fullExercice = () => {
        history.push('/fullExercice')
    }
    const viewTraining = (e) => {
        thisTraining = e.nativeEvent.target.id
        history.push('/trainingView')
    }
    const mainpage = () => {
        history.push('/')
    }
    const createExo = () => {
        history.push('/createExercice')
    }

    return (
        <div>
            <Logo />
            <Card >
                <Card.Body>
                        <div className=' d-flex mb-4 justify-content-center align-items-center' >
                            <Button className=" " onClick={fullExercice}>Tous les exercices</Button>
                        </div>
                    {muscuTrainings && muscuTrainings.map((item, index) => {
                        return (
                            <Card key={index}>
                                <Card.Body className=' d-flex justify-content-between  align-items-center w-100'  >
                                    
                                    <Button variant="info"  id={index} onClick={viewTraining}>{item.name}</Button>
                                    <Button variant="danger"  id={index} onClick={removeTraining} >X</Button>
                                
                                </Card.Body>
                            </Card>
                        )
                    })}
                    <Card.Body className=' d-flex  justify-content-center align-items-center' >
                    </Card.Body>
                    <div className="d-flex justify-content-around">
                        <Button className=" " variant="success" onClick={newTraining}>Nouvel Entrainement</Button>
                        <Button className=" " variant="warning" onClick={createExo}>Crée un Exercice</Button>
                    </div>
                    <div className='mt-3 d-flex   align-items-center justify-content-center' >
                        <Button onClick={mainpage} class="  btn-block" variant="secondary" type="return"> Page d'acceuil </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
