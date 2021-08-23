import React from 'react'
import { useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { useAuth } from './context/AuthContext'
import { Link } from "react-router-dom"
import Logo from './dasboardComponent/Logo'
export default function ForgotPassword() {
    const emailRef = useRef()

    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()


        try {
            setMessage('')
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('an email was send')

        } catch {
            setError('failed to reset password')
        }
        setLoading(false)
    }

    return (

        <div>
            <Logo />
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Password reset</h2>
                    {message && <Alert variant="success">{message}</Alert>}
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>

                        <div className = 'd-flex justify-content-center w-100'>
                        <Button disabled={loading} type="submit">Reset Password</Button>
                        </div>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/login">Login</Link>
                    </div>
                </Card.Body>

            </Card>
            <div className="w-100 text-center mt-2">
                Need an accound?  <Link to="/signup">Sign up</Link>
            </div>
        </div>
    );
}
