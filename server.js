const express = require('express')
const app = express()

app.use(express.static(`${__dirname}/public`))

app.get('/api/stuff', (req, res) => {
    res.status(200).send('yesss Purchase this stufffff')
})

app.listen(4000, () => console.log("Server running on 4000"))