const router = require('express').Router();
let Restaurants = require('../models/restaurants.model');

router.route('/').get((req, res) => {
    Restaurants.find()
    .then(restaurants => res.json(restaurants))
    .catch(err=> res.status(400).json('Error:' + err));
});

module.exports = router;