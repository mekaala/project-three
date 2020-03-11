const express = require('express')
const Relax = require('../models/Relax')
const relaxRouter = express.Router()

// ========================
// GET RELAX EXERCISE INDEX
// ========================

relaxRouter.get('/', (req, res) => {
    Relax.find().then(relaxes => {
        res.json(relaxes)
    })
})

// =========================
// GET SINGLE RELAX EXERCISE
// =========================

relaxRouter.get('/:relaxId', (req, res) => {
    Relax.findById(req.params.relaxId).then(relax => {
        res.json(relax)
    })
})

// =========================
// CREATE NEW RELAX EXERCISE
// =========================

relaxRouter.post('/', (req, res) => {
    Relax.create(req.body).then(() => {
        res.status(200).end();
    })
})

// ===================
// EDIT RELAX EXERCISE
// ===================

relaxRouter.put('/:relaxId', (req, res) => {
    Relax.findByIdAndUpdate(req.params.relaxId, req.body).then(() => {
        res.status(200).end();
    })
})

// =====================
// DELETE RELAX EXERCISE
// =====================

relaxRouter.delete('/:relaxId', (req, res) => {
    Relax.findByIdAndRemove(req.params.relaxId).then(() => {
        Relax.find({name: req.params.name}).then(() => {
            res.status(200).end();
        });
    });
});

module.exports = { relaxRouter }