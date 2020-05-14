require('dotenv').config()
import express from 'express'
import cors from 'cors'

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
app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).json({
    message: 'Success!',
  })
})

app.listen(process.env.PORT, () => {
  console.log(`[${process.env.NODE_ENV}] Server is running on http://localhost:${process.env.PORT}`)
})
