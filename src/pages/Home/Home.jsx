import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Accordion, Button } from 'react-bootstrap';
import PictureHome from '../../components/PictureHome/PictureHome';
import PictureHomeTwo from '../../components/PictureHome/PictureHomeTwo';
import './Home.css';

const Home = () => {
    const nav = useNavigate();

    return (
        <>
            <div className='homePic'>
                <div className="homeBtn">
                    <Button href='contact'>Erstgespräch vereinbaren</Button>
                </div>
            </div>
            <div className='sentence'>
                <h2>Intelligenz ist die Fähigkeit,<br />sich dem Wandel anzupassen.</h2>
                <p>Stephen William Hawking<br />Physiker und Astrophysiker</p>
            </div>
            <div className='firstPage'>
                <div className='webdev'>
                    <h2 className='titleHome'>Hallo, ich bin Claudiu Olaru</h2>
                    <h4 className='titleHome'>Freiberuflicher IT Support Spezialist</h4>
                    <p className='textWebdev'>Erfahrener IT-Supporter mit über 6 Jahren Expertise in 1st und 2nd Level Support, Benutzerverwaltung und Netzwerkadministration. Fundierte Kenntnisse in der Fehlerbehebung, Systemintegration und Prozessoptimierung. Teamorientiert und lösungsfokussiert mit Leidenschaft für innovative IT-Technologien.
                    </p>
                    <div className="telBtn">
                    <Button href='tel: +491742435317'>Lass uns sprechen</Button>
                </div>
                </div>
                <PictureHome />
            </div>
        </>
    )
}

export default Home;