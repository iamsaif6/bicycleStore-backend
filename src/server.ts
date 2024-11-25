import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function server() {
  try {
    mongoose.connect(config.dataBaseUrl as string)

    app.listen(config.port, () => {
      console.log('Server is running')
    })
  } catch (err) {
    console.log(err)
  }
}

server()
