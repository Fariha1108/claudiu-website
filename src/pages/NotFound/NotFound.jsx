import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import logo from '../../components/Header/CO.png';
import './NotFound.css';

const NotFound = () => {
    const nav = useNavigate();

    return (
        <div className='error'>
            <h2 className='titleError'>Sorry!<br />Page not found.</h2>
            <div className='errorImg'>
                <img src={logo} alt="" />
            </div>
            <p className='textError'>Du hast dich wahrscheinlich vertippt! Um auf Claudiu Olaru's Website zurückzukommen, klicke auf den folgenden Button.</p>
            <div className='navBtn'>
                <Button size="lg"
                    onClick={() => nav('/')}
                >
                    Back to Home
                </Button>
            </div>
        </div>
    )
}

export default NotFound;