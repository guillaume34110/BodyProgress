import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from "react-router-dom"
import firebase from "../firebase/firebaseConfig";
import cookieGold from '../assets/cookieGold.png'
import medalBronze from '../assets/medalBronze.png'
import medalSilver from '../assets/medalSilver.png'
import medalGold from '../assets/medalGold.png'
import trophyBronze from '../assets/trophyBronze.png'
import trophySilver from '../assets/trophySilver.png'
import trophyGold from '../assets/trophyGold.png'

export default function Trophy({ userTrophy, currentUser }) {
    const history = useHistory()

    useEffect(() => {
        const Trophy = firebase.database().ref(`users/` + currentUser.uid + "/trophy/musculation")
        Trophy.get().then((snapshot) => {
            let previousList = snapshot.val()
           
            if (previousList === undefined || previousList === null) previousList = {}
            
        if (previousList.cookieGold === undefined ||  previousList.cookieGold === null) {
            const cookieGold = firebase.database().ref(`users/` + currentUser.uid + "/trophy/musculation/cookieGold")
            cookieGold.set(0)
        }
        if (previousList.medalBronze === undefined ||previousList.medalBronze === null ) {
            const medalBronze = firebase.database().ref(`users/` + currentUser.uid + "/trophy/musculation/medalBronze")
            medalBronze.set(0)
        }
        if (previousList.medalSilver === undefined || previousList.medalSilver === null ) {
            const medalSilver = firebase.database().ref(`users/` + currentUser.uid + "/trophy/musculation/medalSilver")
            medalSilver.set(0)
        }
        if (previousList.medalGold === undefined || previousList.medalGold === null) {
            const medalGold = firebase.database().ref(`users/` + currentUser.uid + "/trophy/musculation/medalGold")
            medalGold.set(0)
        }
        if (previousList.trophyBronze === undefined || previousList.trophyBronze === null) {
            const trophyBronze = firebase.database().ref(`users/` + currentUser.uid + "/trophy/musculation/trophyBronze")
            trophyBronze.set(0)
        }
        if (previousList.trophySilver === undefined || previousList.trophySilver === null) {
            const trophySilver = firebase.database().ref(`users/` + currentUser.uid + "/trophy/musculation/trophySilver")
            trophySilver.set(0)
        }
        if (previousList.trophyGold === undefined || previousList.trophyGold === null ) {
            const trophyGold = firebase.database().ref(`users/` + currentUser.uid + "/trophy/musculation/trophyGold")
            trophyGold.set(0)
        }
        
   
    })
  
    
    }, [])


    const trophyRoute = () => {
        history.push('/trophy')
    }

    return (
        <div>
                <hr className="my-4"></hr>
                <div className="  d-flex flex-column justify-content-around align-items-center  mt-4" >
                    <h2> <Button onClick={trophyRoute} variant="secondary" className=' text-center mb-3'>Trophés</Button></h2>
                    <div className="   d-flex flex-row justify-content-around align-items-center w-100 ">
                        <div className="   d-flex flex-row " >
                        <img class=" mr-1" alt="cookie" src={cookieGold} height='28px' width='28px' className="" />
                        <p class="m-0 pr-2">{userTrophy?.cookieGold || '0'}</p>
                        </div>
                        <div className="   d-flex flex-row " >
                        <img class=" mr-1" alt="bronze medal" src={medalBronze} height='28px' width='28px' className="" />
                        <p class="m-0  pr-2">{userTrophy?.medalBronze|| '0'}</p>
                        </div>
                        <div className="   d-flex flex-row " >
                        <img class=" mr-1" alt="silver medal" src={medalSilver} height='28px' width='28px' className="" />
                        <p class="m-0  pr-2">{userTrophy?.medalSilver|| '0'}</p>
                        </div>
                        <div className="   d-flex flex-row " >
                        <img class=" mr-1" alt="gold medal" src={medalGold} height='28px' width='28px' className="" />
                        <p class="m-0  pr-2">{userTrophy?.medalGold|| '0'}</p>
                        </div>
                        <div className="   d-flex flex-row " >
                        <img class=" mr-1" alt="bronze trophy" src={trophyBronze} height='28px' width='28px' className="" />
                        <p class="m-0  pr-2">{userTrophy?.trophyBronze|| '0'}</p>
                        </div>
                        <div className="   d-flex flex-row " >
                        <img class=" mr-1" alt="silver trophy" src={trophySilver} height='28px' width='28px' className="" />
                        <p class="m-0  pr-2">{userTrophy?.trophySilver|| '0'}</p>
                        </div>
                        <div className="   d-flex flex-row " >
                        <img class=" mr-1" alt="gold trophy" src={trophyGold} height='28px' width='28px' className="" />
                        <p class="m-0  pr-2">{userTrophy?.trophyGold|| '0'}</p>
                        </div>
                    </div>
                </div>
                <hr className="mb-0"></hr>
        </div>
    )
}
