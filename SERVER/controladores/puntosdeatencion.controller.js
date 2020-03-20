const express = require('express');

module.exports = {
    signup: async (req, res, next) => {

        const { email, username, password } = req.value.body;

        const connection = require('../database');

        connection.query("SELECT * FROM puntosdeatencion", function(err, rows) {
            if (rows.length) {
                return res.json({ err: 'Email already exist'});
            } else {

                var newUserMysql = {
                    email: email,
                    username: username,                 
                    password: password  
                };

    
}

module.exports = puntoAtencionCtrl;

