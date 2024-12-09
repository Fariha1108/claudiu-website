import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import farnez from '../../../src/components/Header/CO.png';
import { Modal, Button, Form } from 'react-bootstrap';
import swal from 'sweetalert';
import './Footer.css';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function initFontAwesome() {
    library.add(fab, faLinkedin, faGithub);
};
initFontAwesome();

const Footer = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

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
        else {
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


    return (
        <div className='contentFooter'>
            <div className='footer'>
                <div className='footerLogo'>
                    <img src={farnez} alt="" />
                </div>
                <div className='formQuestions'>
                    <p className='questions'>Hast du Fragen? Dann schick mir eine Nachricht, ich melde mich bei dir.</p>
                    <Modal.Dialog>
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
            <div className='linkFooter'>
                <Navbar expand="lg" variant="dark">
                    <Navbar.Brand>&copy;ClaudiuOla</Navbar.Brand>
                    <Navbar.Text>
                        <div className='links'>
                            <a href="https://www.linkedin.com/in/claudiu-olaru-581a58282/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                        </div>
                    </Navbar.Text>
                </Navbar>
            </div>
        </div>
    )
}

export default Footer;

