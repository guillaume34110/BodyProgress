import React, { useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { useAuth } from './context/AuthContext'
import { Link, useHistory } from "react-router-dom"
import Logo from './dasboardComponent/Logo'

export default function UpdateProfile() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassword, updateEmail } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('les mots de passe ne correspondent pas')
        }
        if (passwordRef.current.value.length > 3 && passwordRef.current.value.length < 12) {
            return setError('les mots de passes sont compreis entre 3 et 12 caractéres')
        }

        const promises = []
        setLoading(true)
        setError("")
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises)
            .then(() => {
                history.push("/")
            })
            .catch(() => {
                setError('erreur lors de la mise a jour')
            })
            .finally(() => {
                setLoading(false)

            })
    }
    const dashboard = () => {
        history.push('/')
    }
    return (

        <div>
            <Logo />
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">mettre a jour le profil</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required
                                defaultValue={currentUser.email} />

                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>mot de passe</Form.Label>
                            <Form.Control type="password" ref={passwordRef}
                                placeholder="laiisez vide pour garder l'ancien" />

                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>confirmation de mots de passe</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef}
                                placeholder="laissez vide pour garder l'ancien" />
                        </Form.Group>
                        <div className=' d-flex justify-content-around w-100'>
                            <Button disabled={loading} type="submit">mettre a jour</Button>
                            <Button variant="secondary" onClick = {dashboard}type="button">page d'acceuil</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

