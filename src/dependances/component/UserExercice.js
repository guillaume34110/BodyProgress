import React, { useState, useEffect, useRef } from 'react'
import { Button, Form, Dropdown, Alert } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'
import firebase from "../firebase/firebaseConfig";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ratioMuscu } from "../database/ratio"
import SpeProgress from './SpeProgress';

let dropRef = '10'
let rep = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]


export default function UserExercices({ Exercice}) {

    const { currentUser } = useAuth();
    const history = useHistory();
    const useData = useRef()
    const [repSet, setRepSet] = useState('rep')
    const [dropdowTitle, setdropdowTitle] = useState('10 rep')
    const [userSex, setUserSex] = useState(ratioMuscu.Strength[Exercice].male)
    const [ExerciceData, setExerciceData] = useState([])
    const [error, setError] = useState('')
    const [unit, setUnit] = useState('poids')
    const [ratioData, setRatioData] = useState([])
    const [userValue, setUserValue] = useState([])
    const[max,setMax]=useState(10)
    const [render , setRender]=useState(0)

    useEffect(() => {
        console.log(Exercice, 'exo')
        const exoData = firebase.database().ref(`users/` + currentUser.uid + "/userExercice/exercice/" + Exercice)
        exoData.get().then((snapshot) => {
            let previousList0 = snapshot.val()
            setUserValue(previousList0)
            if (previousList0.lest === '1') {

                const exo = firebase.database().ref(`users/` + currentUser.uid + "/userExercice/stats/" + Exercice + '/10')
                exo.get().then((snapshot) => {
                    let previousList = snapshot.val()
                    if (previousList !== undefined && previousList !== null) {
                        setExerciceData(previousList)
                        let buffer = []
                    previousList.forEach(e => {
                        buffer.push(parseInt(e.poids))
                    });
                    buffer = Math.max(...buffer)
                    setMax(buffer)
                    } else {
                        setExerciceData([])
                        setMax(10)
                    }
                })

            } else if (previousList0.lest === '2') {
                dropRef = '1'
                rep = [1]
                setRepSet('set')
                setUnit('repetitions')
                setdropdowTitle('1 set')
                const exo = firebase.database().ref(`users/` + currentUser.uid + "/userExercice/stats/" + Exercice + '/1')
                exo.get().then((snapshot) => {
                    let previousList = snapshot.val()
                    if (previousList !== undefined && previousList !== null) {
                        setExerciceData(previousList)
                        let buffer = []
                    previousList.forEach(e => {
                        buffer.push(parseInt(e.repetitions))
                    });
                    buffer = Math.max(...buffer)
                    setMax(buffer)
                    } else {
                        setExerciceData([])
                        setMax(10)
                    }
                })

            }
        })

    }, [render])

    const mainpage = () => {
        history.push('/')
    }
    const submit = () => {
        if (parseInt(useData.current.value) > 0 && parseInt(useData.current.value) < 2000) {
            const today = new Date();
            const date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
            let newData
            if( unit === 'poids') newData = { name: date, poids: useData.current.value, rep: dropRef }
            if( unit === 'repetitions') newData = { name: date, repetitions: useData.current.value, rep: dropRef }
           
            const exo = firebase.database().ref(`users/` + currentUser.uid + "/userExercice/stats/" + Exercice + "/" + dropRef)
            exo.get().then((snapshot) => {
                let previousList = snapshot.val()
                if (previousList !== undefined && previousList !== null) {
                    previousList.push(newData)
                } else {
                    previousList = [newData]
                }
                exo.set(previousList)
                setExerciceData(previousList)
            })
            ratioProcess(useData.current.value, parseInt(dropRef))
        } else {
            setError("le poids doit étre compris entre 0 et 2000")
        }
    }
    const ratioProcess = (data, rep) => {
        let newRatio
        const userData = firebase.database().ref(`users/` + currentUser.uid + "/info")
        userData.get().then((snapshot) => {
            let previousList = snapshot.val()


            let repFactor
            if (rep === 1) repFactor = 1
            if (rep === 2) repFactor = 0.97
            if (rep === 3) repFactor = 0.94
            if (rep === 4) repFactor = 0.92
            if (rep === 5) repFactor = 0.89
            if (rep === 6) repFactor = 0.86
            if (rep === 7) repFactor = 0.83
            if (rep === 8) repFactor = 0.81
            if (rep === 9) repFactor = 0.78
            if (rep === 10) repFactor = 0.75
            if (rep === 11) repFactor = 0.73
            if (rep === 12) repFactor = 0.71
            if (rep === 13) repFactor = 0.70
            if (rep === 14) repFactor = 0.68
            if (rep === 15) repFactor = 0.67
            if (rep === 16) repFactor = 0.65
            if (rep === 17) repFactor = 0.64
            if (rep === 18) repFactor = 0.63
            if (rep === 19) repFactor = 0.61
            if (rep === 20) repFactor = 0.60
            if (rep === 21) repFactor = 0.59
            if (rep === 22) repFactor = 0.58
            if (rep === 23) repFactor = 0.57
            if (rep === 24) repFactor = 0.56
            if (rep === 25) repFactor = 0.55
            if (rep === 26) repFactor = 0.54
            if (rep === 27) repFactor = 0.53
            if (rep === 28) repFactor = 0.52
            if (rep === 29) repFactor = 0.51
            if (rep === 30) repFactor = 0.50

            if (userValue.lest === '1') newRatio = (((data / previousList.weight) * 100) / (userValue?.cookieGold)) * 100 / repFactor
            if (userValue.lest === '2') newRatio = ((data * 100) / (userValue?.cookieGold)) / repFactor

            const oldratio = firebase.database().ref(`users/` + currentUser.uid + "/userExercice/stats/" + Exercice + "/ratioMax")
            oldratio.get().then((snapshot) => {
                let previousList2 = snapshot.val()
                let token = false
                if (newRatio === null || newRatio === undefined) newRatio = 0
                if (previousList2 <= newRatio) {
                    token = true
                    oldratio.set(newRatio)
                }
                setRatioData(newRatio)
                if (token === true) {
                    const exerciceTrophy = firebase.database().ref(`users/` + currentUser.uid + "/userExercice/stats/" + Exercice + "/trophy")
                    exerciceTrophy.get().then((snapshot) => {
                        let previousList3 = snapshot.val()
                        if (previousList3 === null || previousList3 === undefined) previousList3 = {}
                        console.log(previousList3)
                        const trophy = firebase.database().ref(`users/` + currentUser.uid + "/trophy/musculation")
                        trophy.get().then((snapshot) => {
                            let trophyList = snapshot.val()

                            if (previousList3.cookieGold === undefined && newRatio >= userValue.cookieGold) {
                                previousList3.cookieGold = 1
                                exerciceTrophy.set(previousList3)
                                let cookieList = trophyList
                                cookieList.cookieGold += 1
                                trophy.set(cookieList)

                            }

                            if (previousList3.cookieGold === 1 && newRatio < userValue.cookieGold) {
                                previousList3.cookieGold = null
                                exerciceTrophy.set(previousList3)
                                let cookieList = trophyList
                                cookieList.cookieGold -= 1
                                trophy.set(cookieList)
                            }

                        })
                    })
                }
            })
        })
    }

    const selectRep = (e) => {
        dropRef = e.nativeEvent.target.id

        setdropdowTitle(e.nativeEvent.target.id + 'rep')
        const exo = firebase.database().ref(`users/` + currentUser.uid + "/userExercice/stats/" + Exercice + "/" + e.nativeEvent.target.id)
        exo.get().then((snapshot) => {
            let previousList = snapshot.val()
            setExerciceData(previousList)
            setRender(render +1)
        })
    }

    const remove = async () => {
        const oldratio = firebase.database().ref(`users/` + currentUser.uid + "/userExercice/stats/" + Exercice + "/ratioMax")
        oldratio.get().then((snapshot) => {
            let previousList = snapshot.val()
            previousList = 0
            oldratio.set(previousList)

            const exo = firebase.database().ref(`users/` + currentUser.uid + "/userExercice/stats/" + Exercice + "/" + dropRef)
            exo.get().then((snapshot) => {
                let previousList = snapshot.val()
                if (previousList !== undefined && previousList !== null) {
                    previousList.pop()
                } else {
                    console.log('bug')
                    previousList = []
                    ratioProcess(0, 1)
                    setRatioData(0)
                }
                exo.set(previousList)
                setExerciceData(previousList)
                setRender(render +1)

                const fullexo = firebase.database().ref(`users/` + currentUser.uid + "/userExercice/stats/" + Exercice)
                fullexo.get().then(async (snapshot) => {
                    let previousList2 = snapshot.val()
                    let token = false
                    if (previousList2 !== undefined && previousList2 !== null) {
                        for (let i = 1; i < 31; i++) {
                            if (previousList2[i] !== null && previousList2[i] !== undefined) {
                                for (let j = 0; j < previousList2[i].length; j++) {
                                    if (previousList2[i][j] !== undefined && previousList2[i][j] !== null) {
                                        token = true
                                        await ratioProcess(parseInt(previousList2[i][j].poids), parseInt(previousList2[i][j].rep))
                                    }
                                }
                            }
                        }
                    } else {
                        token = true
                        console.log('bug')
                        previousList = []
                        ratioProcess(0, 1)
                        setRatioData(0)
                    }
                    if (token === false) {
                        previousList = []
                        ratioProcess(0, 1)
                        setRatioData(0)
                    }
                })
            })
        })
    }

    return (
        <div className="mt-3">
            {error && <Alert variant="danger">{error}</Alert>}
            <h2 className="text-center">{userValue?.name}</h2>
            <Form className="mt-3">
                <Form.Group id="name">
                    <Form.Control placeholder={unit} id="nameForm" type="text" ref={useData} required />
                </Form.Group>
                <div className="mb-3 mt-3 d-flex justify-content-around">
                    <Button onClick={submit} type="button"> nouvelle donnée</Button>
                    <Dropdown id="drop-button d-flex justify-content-center">
                        <Dropdown.Toggle id=" drop-button dropdown-autoclose-true ">
                            {dropdowTitle}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu" >
                            {rep && rep.map((item, index) => (
                                <Dropdown.Item value={item} id={item} onClick={selectRep} key={index} href="#"> {item} {repSet}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Form>
            
            <div className = "mr-5 w-100 h-100">
            
            <LineChart  width={350} height={250} data={ExerciceData} margin={{
            top: 5,
            right: 20,
            left: 0,
            bottom: 5,
          }}>
                <Line type="monotone" dataKey={unit} stroke="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis type="number"  domain={[0, max+1]}/>
                <Tooltip />
            </LineChart>
           </div>
            <SpeProgress exercice={Exercice} ratioData={ratioData} userSex={userSex} />
            <div className='mt-4 d-flex   align-items-center justify-content-around' >
                <Button onClick={mainpage} class="  btn-block" variant="secondary" type="return"> Page d'accueil </Button>
                <Button onClick={remove} class="  btn-block" variant="danger" type="return"> supprimer </Button>
            </div>

        </div>
    )
}
