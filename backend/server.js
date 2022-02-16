const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const {notFound, errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db')

const userRoutes = require('./routes/userRoutes')

dotenv.config()
connectDB()


const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }

app.use(express.json());


app.use('/api/v1/users', userRoutes);

app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 3002

app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
  )