const express = require('express');
const nodemailer = require('nodemailer');
const correo = {}

correo.transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'fletcher.jacobs@ethereal.email',
        pass: 'CMjtBUx4DHpr3AK3r4'
    },
    tls: {
        rejectUnauthorized: false
    }
});




module.exports = correo;