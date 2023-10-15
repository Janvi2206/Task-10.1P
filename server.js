const express = require('express');
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js');

const apiKey = 'key-88fe00d423c6f9e95c846638caa7c474';
const domain = 'sandbox2841d2a2edf842f7bfb79e8d9779456e.mailgun.org';
const mailgunInstance = mailgun({ apiKey: apiKey, domain: domain });

const app = express();
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/', (req, res) => {
    const email = req.body.email;

    const data = {
        from: 'Janvi <janvi4794.be22@chitkara.edu.in>',
        to: email,
        subject: 'Welcome to Dev@Deakin!',
        text: 'Thank you for subscribing to our channel. Stay tuned for exciting updates.',
    };

    mailgunInstance.messages().send(data, (error, body) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send('Error sending email.');
        }

        console.log('Email sent:', body);
        res.status(200).send('Email sent successfully');
    });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
