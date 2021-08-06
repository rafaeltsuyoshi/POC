const express = require("express")
const cors = require("cors")
import routes from "./routes"

const app = express()

app.use(cors({}))

app.use(express.json())

app.use('/api', routes)

app.listen(3000, () => {
    console.log('Server is running on port: 3000')
})