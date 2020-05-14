const express = require('express')
const cors = require('cors')
const dontenv = require('dotenv')

dontenv.config()
const app = express()

/**
 *
 *   Middlewares
 *
 */
app.use(cors())
app.use(express.json())

/**
 *
 *   Endpoints
 *
 */
app.get('/', (req: any, res: any) => {
  res.status(200).json({
    message: 'Success!',
  })
})

app.listen(process.env.PORT, () => {
  console.log(`[${process.env.NODE_ENV}] Server is running on http://localhost:${process.env.PORT}`)
})
