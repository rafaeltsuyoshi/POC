import { init } from "./db/models/database"
import routes from "./routes"

const express = require("express")
const cors = require("cors")
const sequelize = init()

const app = express()

app.use(cors({}))

app.use(express.json())

app.use('/api', routes)

void sequelize.authenticate().then(async () => {
  app.listen(3000, () => {
    console.log(`Listening at http://localhost:3000`)
  })
}).catch((error) => {
  console.log(`Error connecting with database ${error}`)
})