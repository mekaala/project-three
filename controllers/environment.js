const express = require('express')
const Environment = require('../models/Environment')
const environmentRouter = express.Router()

// =====================
// GET ENVIRONMENT INDEX
// =====================

environmentRouter.get('/', (req, res) => {
    Environment.find().then(environments => {
        res.json(environments)
    })
})

// ======================
// GET SINGLE ENVIRONMENT
// ======================

environmentRouter.get('/:environmentId', (req, res) => {
    Environment.findById(req.params.environmentId).then(environment => {
        res.json(environment)
    })
})

// ======================
// CREATE NEW ENVIRONMENT
// ======================

environmentRouter.post('/', (req, res) => {
    Environment.create(req.body).then(() => {
        res.status(200).end();
    })
})

// ================
// EDIT ENVIRONMENT
// ================

environmentRouter.put('/:environmentId', (req, res) => {
    Environment.findByIdAndUpdate(req.params.environmentId, req.body).then(() => {
        res.status(200).end();
    })
})

// ==================
// DELETE ENVIRONMENT
// ==================

environmentRouter.delete('/:environmentId', (req, res) => {
    Environment.findByIdAndRemove(req.params.environmentId).then(() => {
        Environment.find({name: req.params.name}).then(() => {
            res.status(200).end();
        });
    });
});

module.exports = { environmentRouter }