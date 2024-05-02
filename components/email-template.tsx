import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    lastName?: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    lastName,
    email,
    phone,
    subject,
    message
}) => (
    <html lang="en">
        <head>
            {/* <meta charset="UTF-8" /> */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Contact Form Submission</title>
            <style>
                {`
                body {
                    font: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 20px;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                }
                h2 {
                    margin-top: 0;
                }
                .info {
                    margin-bottom: 20px;
                }
                .info label {
                    font-weight: bold;
                }
                .message {
                    margin-top: 20px;
                }
                .message label {
                    display: block;
                    font-weight: bold;
                }
                .message p {
                    white-space: pre-line;
                }
                `}
            </style>
        </head>
        <body>
            <div className="container">
                <h2>Contact Form Submission</h2>
                <div className="info">
                    <label htmlFor="firstName">Name: </label>
                    <span id="firstName">{firstName} {lastName}</span>
                    <br />
                    <label htmlFor="email">Email: </label>
                    <span id="email">{email}</span>
                    <br />
                    <label htmlFor="phone">Phone: </label>
                    <span id="phone">{phone}</span>
                    <br />
                    <label htmlFor="subject">Subject: </label>
                    <span id="subject">{subject}</span>
                </div>
                <div className="message">
                    <label htmlFor="message">Message: </label>
                    <p id="message">{message}</p>
                </div>
            </div>
        </body>
    </html>
);
