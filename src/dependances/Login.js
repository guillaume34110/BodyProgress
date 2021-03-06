import React from 'react'
import { useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { useAuth } from './context/AuthContext'
import { Link, useHistory } from "react-router-dom"
import Logo from './dasboardComponent/Logo'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    async function handleSubmit(e) {
        e.preventDefault()


        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("erreur d'authentification")
        }
        setLoading(false)
    }

    return (

        <div>
            <Logo />
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">identifiez vous</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>mot de passe</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <div className = 'd-flex justify-content-center w-100'>
                        <Button disabled={loading} type="submit">identification</Button>
                   </div> </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/forgot-password">mot de passe oublié?</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                besoin d'un compte?  <Link to="/signup">enregistrez vous</Link>
            </div>
        </div>
    );
}
