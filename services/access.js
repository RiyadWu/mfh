const request = require('request')
const APIS = require('../config/http.config')
const cookieUtil = require('../utils/cookie')

function login(callback) {
  const option = {
    url: APIS.LOGIN,
    headers: {
      Cookie: cookieUtil.getCookie()
    },
    form: {
      userName: 'T232709',
      password: 'aqrxcq0217+',
      confirmationCode: '12'
    }
  }

  request.post(option, function (err, res, body) {
    callback(err, res, body)
  })
}

function cookie() {

}

module.exports = {
  login,
  cookie
}