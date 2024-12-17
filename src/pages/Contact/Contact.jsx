import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import lapi from '../../../src/components/Design/lapi.gif';
import swal from 'sweetalert';
import './Contact.css';

const Contact = () => 
{
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ topic, setTopic ] = useState('');
    const [ message, setMessage ] = useState('');

    const [invalidFirstName, setInvalidFirstName] = useState(false);
    const [invalidLastName, setInvalidLastName] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidMessage, setInvalidMessage] = useState(false);

    const [validFirstName, setValidFirstName] = useState(false);
    const [validLastName, setValidLastName] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validMessage, setValidMessage] = useState(false);

    const handleSave = () => {
        if (!firstName || !lastName || !email || !message)
            return;
        else
        {
            swal("Danke für deine Nachricht", "Wir melden uns bei dir in Kürze", "success");
        }
    }

    const validation = () => {
        if (firstNameCheck(firstName) && lastNameCheck(lastName) && emailCheck(email) && messageCheck(message)) {
            handleSave()
        }
        if (!firstNameCheck(firstName)) {
            setInvalidFirstName(true)
            setValidFirstName(false)
        }
        else {
            setValidFirstName(true)
            setInvalidFirstName(false)
        }
        if (!lastNameCheck(lastName)) {
            setInvalidLastName(true)
            setValidLastName(false)
        }
        else {
            setValidLastName(true)
            setInvalidLastName(false)
        }
        if (!emailCheck(email)) {
            setInvalidEmail(true)
            setValidEmail(false)
        }
        else {
            setValidEmail(true)
            setInvalidEmail(false)
        }
        if (!messageCheck(message)) {
            setInvalidMessage(true)
            setValidMessage(false)
        }
        else {
            setValidMessage(true)
            setInvalidMessage(false)
        }
    }
    const firstNameCheck = (input) => {
        if (input.length < 3) {
            return false
        } else
            return true
    }
    const lastNameCheck = (input) => {
        if (input.length < 3) {
            return false
        } else
            return true
    }
    const emailCheck = (input) => {
        const check = (
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        return check.test(email)
    }
    const messageCheck = (input) => {
        if (input.length < 10) {
            return false
        } else
            return true
    }

    fetch('https://it-solution-claudiuolaru.de/send-message', { // Vollständige Backend-URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            topic: topic,
            message: message
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP-Fehler! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Erfolgreich:', data);
        // Feedback an den Benutzer, z. B. mit Swal oder einer Benachrichtigung
    })
    .catch(error => {
        console.error('Fehler beim Senden der Nachricht:', error);
        // Feedback für Fehler an den Benutzer anzeigen
    });
    
    

    return (
        <>
            <div className='letsMeet'>
                <div className='boxContact'>
                    <h2 className='titleContact'>Lass uns starten</h2>
                    <p className='textContact'>Du brauchst Unterstützung bei deinen IT Anwendungen und Kundenbetreuung?<br />Du möchtest dein Unternehmen online auf den nächsten Level bringen?<br />Dann warte nicht lange!</p>
                    <p className='callToAction'>Lass uns zusammenarbeiten</p>
                </div>
            </div>
            <div className='formPage'>
                <div className='animatedDesign'>
                    <img src={lapi} alt="" />
                </div>
                <div className='form'>
                    <p className='motivation'>Bring dein Business in den nächsten Level!</p>
                    <Modal.Dialog className='modalContact'>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="Vorname"
                                        onChange={(e) => { setFirstName(e.target.value) }}
                                        isInvalid={invalidFirstName}
                                        isValid={validFirstName}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="Nachname"
                                    onChange={(e) => { setLastName(e.target.value) }}
                                    isInvalid={invalidLastName}
                                    isValid={validLastName}
                                    />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Control type="email" placeholder="beispiel@email.com"
                                    onChange={(e) => { setEmail(e.target.value) }} 
                                    isInvalid={invalidEmail}
                                    isValid={validEmail}
                                    
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="Betreff"
                                    onChange={(e) => { setTopic(e.target.value) }}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control placeholder="Nachricht (min. 10 Zeichen) " as="textarea" rows={3}
                                    onChange={(e) => { setMessage(e.target.value) }}
                                    isInvalid={invalidMessage}
                                    isValid={validMessage}
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button size="lg"
                                onClick={() => { validation() }}
                            >
                                Submit
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            </div> 
            <p className='myEmail'>Email:</p>
            <p className='emailAdress'>claudiuolaru437@gmail.com</p>
        </>
    )
}

export default Contact;