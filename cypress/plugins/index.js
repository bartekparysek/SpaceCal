require('dotenv').config()

module.exports = (on, config) => {

  config.env = config.env || {}

  config.env.googleRefreshToken = process.env.GOOGLE_REFRESH_TOKEN
  config.env.googleClientId = process.env.REACT_APP_GOOGLE_CLIENTID
  config.env.googleClientSecret = process.env.REACT_APP_GOOGLE_CLIENT_SECRET
  config.env.foo = process.env.FOO

  return config
}
