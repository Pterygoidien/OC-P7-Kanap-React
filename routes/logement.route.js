const logementController = require('../controllers/logement.controller');
const express = require('express');
const router = express.Router();

router.get('/', logementController.getLogements);
router.get('/:id', logementController.getLogement);

module.exports = router;


