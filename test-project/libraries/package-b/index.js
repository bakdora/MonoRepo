import { helloMsg } from "../package-a/index.js"
import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    helloMsg()
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log('some more logs to see it working')
    console.log(`Package B app listening on port ${port}`)
})