// Importieren der erforderlichen Module
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

// Middleware zum Analysieren des Body der Anfragen
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Nodemailer Transport konfigurieren
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@example.com', // Ihr Gmail-E-Mail-Adresse
        pass: 'your-email-password'   // Ihr Gmail-Passwort
    }
});

// POST Route für den Kontaktformular
app.post('/send-message', (req, res) => {
    const { firstName, lastName, email, topic, message } = req.body;

    // Erstellen der Nachricht
    const mailOptions = {
        from: email,
        to: 'receiver-email@example.com', // Ziel-E-Mail-Adresse
        subject: topic,
        text: `Nachricht von ${firstName} ${lastName}\nEmail: ${email}\nNachricht: ${message}`
    };

    // Nachricht senden
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Nachricht wurde erfolgreich versendet');
    });
});

// Server starten
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
