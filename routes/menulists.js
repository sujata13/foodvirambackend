const router = require('express').Router();
let Menulists = require('../models/menulists.model');

router.route('/').get((req, res) =>{
    Menulists.find()
    .then(menulists => res.json(menulists))
    .catch(err=> res.status(400).json('Error:' + err));
});

module.exports = router;