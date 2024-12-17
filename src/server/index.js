
// Importieren der erforderlichen Module
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors')
const app = express();

// Middleware zum Analysieren des Body der Anfragen
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Nodemailer Transport konfigurieren
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@example.com', // Deine Gmail-Adresse
        pass: 'your-app-password'      // Generiertes App-Passwort
    }
});

// CORS-Konfiguration
app.use(cors({
    origin: 'https://it-solution-claudiuolaru.de',
    methods: ['POST'] // Nur POST-Anfragen erlauben
}));

// POST Route für den Kontaktformular
app.post('/send-message', (req, res, next) => {
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }

    const { firstName, lastName, email, topic, message } = req.body;

    // Validierung der Eingabedaten
    if (!firstName || !lastName || !email || !topic || !message) {
        return res.status(400).send('Alle Felder müssen ausgefüllt sein');
    }

    // Erstellen der Nachricht
    const mailOptions = {
        from: 'your-email@example.com', // Eigene E-Mail-Adresse
        replyTo: email,                 // Benutzer-E-Mail für Antworten
        to: 'fariha_1990@outlook.de',   // Ziel-E-Mail-Adresse
        subject: topic,
        text: `Nachricht von ${firstName} ${lastName}\nEmail: ${email}\nNachricht: ${message}`
    };

    // Nachricht senden
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Fehler beim Senden:', error);
            return res.status(500).send('Fehler beim Senden der Nachricht');
        }
        console.log('Nachricht erfolgreich gesendet:', info.response);
        res.status(200).send('Nachricht wurde erfolgreich versendet');
    });
});

// Server starten
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
