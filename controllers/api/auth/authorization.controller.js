
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

var config = require(`../../../lib/configLoader`);
var VerifyToken = require('../../../lib/VerifyToken');

var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var User = require('../../../models/user');


class AuthorizationController {

    constructor(router) {
        router.get('/user', VerifyToken, this.getUser.bind(this));
        router.post('/register', this.registerUser.bind(this));
        router.post('/login', this.loginUser.bind(this));

    }

    getUser(req, res, next) {
        console.log('inside get Me');
        var token = req.headers['x-access-token'];
        if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

        //  jwt.verify(token, config.secret, function (err, decoded) {
        //if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        User.findById(req.userId, { password: 0 }, function (err, user) {
            if (err) return res.status(500).send('There was a problem finding the user.');
            if (!user) return res.status(404).send('No user found.');

            res.status(200).send(user);
            //next(user);
        });
        //res.status(200).send(decoded);
        // });
    }

    registerUser(req, res) {
        var hashedPassword = bcrypt.hashSync(req.body.password, 8);

        User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPassword,
        }, function (err, user) {
            if (err) {
                return res.status(500).send('There was problem registering the user');
            }

            //Create a token
            var token = jwt.sign(
                {
                    id: user._id
                },
                config.secret,
                {
                    expiresIn: 86400 // expires in 24 hours
                });
            res.status(200).send({ auth: true, token: token });
        });
    }

    loginUser(req, res) {
        User.findOne({ email: req.body.email }, function (err, user) {
            // if (err) return res.status(500).send('Error on the server');
            // if (!user) return res.status(404).send('No user found');

            if (err) return res.status(500).send({ auth: false, token: null, error: 'Error on the server' });

            if (!user) return res.status(404).send({ auth: false, token: null, error: 'No user found' });
            var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

            if (!passwordIsValid) res.status(401).send({ auth: false, token: null, error: res.statusText });
            if (passwordIsValid) {
                var token = jwt.sign({ id: user._id }, config.secret, { expiresIn: 86400 });
                res.status(200).send({ auth: true, token: token });
            }

        });
    }

}

module.exports = AuthorizationController;

