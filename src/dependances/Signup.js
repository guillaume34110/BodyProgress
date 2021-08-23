import React, { useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { useAuth } from './context/AuthContext'
import { Link, useHistory } from "react-router-dom"
import Logo from './dasboardComponent/Logo'
const Signup = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        var check = /^[A-Za-z]\w{2,12}$/
        if (passwordRef.current.value !== passwordConfirmRef.current.value ) {
            return setError('les mots de passes ne correspondent pas')
        }
        if (passwordRef.current.value.match(check) ){
            
        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/user")
        } catch {
            setError('email ou mot de passe invalide')
        }
        setLoading(false)
    }else{
        return setError('les mots de passes sont compris entre 3 et 12 caractéres non spéciaux')
        }
    }
    

    return (

        <div>
            <Logo/>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">enregistrement</h2>

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
                        <Form.Group id="password-confirm">
                            <Form.Label>confirmation du mot de passe</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <div className = 'd-flex justify-content-center w-100'>
                        <Button disabled={loading} type="submit">enregistrez vous</Button>
                        </div>
                    </Form>
                </Card.Body>

            </Card>
            <div className="w-100 text-center mt-2">
                vous avez déja un acompte? <Link to="/login">identifiez vous</Link>
            </div>
        </div>
    );
};

export default Signup;