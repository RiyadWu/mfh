const request = require('request')
const APIS = require('../config/http.config')
const cookieUtil = require('../utils/cookie')

function cookieChecker(payload, callback) {
  const { err, httpResponse, body } = payload
  const headers = httpResponse.headers
  if (headers && headers['set-cookie']) {
    const newCookie = headers['set-cookie']
    cookieUtil.setCookie(newCookie)
    return () => {
      callback(err, httpResponse, body)
    }
  }
}

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

  request.post(option, function (err, httpResponse, body) {
    cookieChecker({ err, httpResponse, body }, callback)
  })
}

function cookie() {

}

module.exports = {
  login,
  cookie
}