const express = require('express')
const app = express()

const { environmentRouter } = require('./controllers/environment.js')
const { focusRouter } = require('./controllers/focus.js')
const { relaxRouter } = require('./controllers/relax.js')

app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.use(express.static(`${__dirname}/client/build`))

app.use('/api/environments', environmentRouter)
app.use('/api/focuses', focusRouter)
app.use('/api/relaxes', relaxRouter)

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})