
import React, { useState, useEffect } from 'react';
import { Card , Alert } from 'react-bootstrap'
import {  useHistory } from 'react-router-dom';
import { useAuth } from './context/AuthContext'
import Logo from './dasboardComponent/Logo';
import TrainingSection from './dasboardComponent/TrainingSection';
import Trophy from './dasboardComponent/Trophy';
import UserInfo from './dasboardComponent/UserInfo';
import firebase from "./firebase/firebaseConfig";



const Dashboard = () => {
    const [error, setError] = useState("");
    const { logout, currentUser } = useAuth();
    const history = useHistory();
    const [userData, setUserData] = useState([])
    const [userTrophy, setUserTrophy] = useState([])

    useEffect(() => {

        const name = firebase.database().ref(`users/` + currentUser.uid + "/info")
        name.get().then((snapshot) => {
            let previousList = snapshot.val()
            console.log(previousList)
            if (previousList !== undefined && previousList !== null) {
                setUserData(previousList)
            }else{
                previousList={}
                previousList.name = 'emanuel';
                previousList.age = '42';
                previousList.height = '120'
                previousList.sex = '1'
                previousList.weight = '150'
                name.set(previousList)
                setUserData(previousList)
            }
            
        })

        const Trophy = firebase.database().ref(`users/` + currentUser.uid + "/trophy/musculation")
        Trophy.get().then((snapshot) => {
            let previousList = snapshot.val()
            console.log(previousList)
            if (previousList !== undefined) setUserTrophy(previousList)
        })
    }, [])

    async function handleLogout() {
        setError("")
        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }
    }


    return (
        <div>
            <Logo />
            <Card>
                <Card.Body>
                    <UserInfo userData={userData} />
                    <TrainingSection />
                    <Trophy userTrophy={userTrophy}  currentUser={currentUser} />
                    <div className="w-100 text-center logout">
                        {error && <Alert variant="danger">{error}</Alert>}
                        <div onClick={handleLogout}>Log Out</div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Dashboard;