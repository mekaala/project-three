const express = require('express')
const Focus = require('../models/Focus')
const focusRouter = express.Router()

// ========================
// GET FOCUS EXERCISE INDEX
// ========================

focusRouter.get('/', (req, res) => {
    Focus.find().then(focuses => {
        res.json(focuses)
    })
})

// =========================
// GET SINGLE FOCUS EXERCISE
// =========================

focusRouter.get('/:focusId', (req, res) => {
    Focus.findById(req.params.focusId).then(focus => {
        res.json(focus)
    })
})

// =========================
// CREATE NEW FOCUS EXERCISE
// =========================

focusRouter.post('/', (req, res) => {
    Focus.create(req.body).then(() => {
        res.status(200).end();
    })
})

// ===================
// EDIT FOCUS EXERCISE
// ===================

focusRouter.put('/:focusId', (req, res) => {
    Focus.findByIdAndUpdate(req.params.focusId, req.body).then(() => {
        res.status(200).end();
    })
})

// =====================
// DELETE FOCUS EXERCISE
// =====================

focusRouter.delete('/:focusId', (req, res) => {
    Focus.findByIdAndRemove(req.params.focusId).then(() => {
        Focus.find({name: req.params.name}).then(() => {
            res.status(200).end();
        });
    });
});

module.exports = { focusRouter }