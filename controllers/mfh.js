const request = require('request')
const cheerio = require('cheerio')
const accessServices = require('../services/access')
const cookieUtil = require('../utils/cookie')

function cookieChecker(response) {
  const headers = response.headers
  if (headers && headers['set-cookie']) {
    const newCookie = headers['set-cookie']
    cookieUtil.setCookie(newCookie)
    return false
  } else {
    return true
  }
}

function test(req, res, next) {
  const callback = function (err, response, body) {
    if (cookieChecker(response)) {
      return res.render('index.html', { cookie: cookieUtil.getCookie() })
    } else {
      res.redirect('/auth')
    }

  }

  accessServices.login(callback)
}

function auth(req, res, next) {
  return res.render('index.html', { cookie: 'auth' })
}


function minilistSs(req, res, next) {
  const option = {
    url: "http://119.18.194.36/miniIf/MinilistSs",
    headers: {
      Cookie: 'BIGipServerpool_SD_DaiLiShang=738283530.36895.0000; JSESSIONID=48C2C5B65479654ECDFB5FA04517D5DC'
    },
    form: {
      pageSize: 100,
      pageNum: 1,
      mecTyp: '04',
      mercOprMbl: '18655571897'
    }
  }

  request.post(option, function(err, httpResponse, body){
    const bodyStr = body.toString()

    dataFilter(bodyStr)
    return res.send(body.toString())
  })
}

function dataFilter(doc) {
  const $ = cheerio.load(doc)
  const keyNodes = $('table thead tr th')
  const valueNodes = $('table tbody tr td')
  const keys = []
  const values = []
  for (let i = 0; i < keyNodes.length; i++) {
    keys.push(keyNodes.eq(i).text())
    values.push(valueNodes.eq(i).text())
  }

  const revertKeys = revertKey(keys)

  console.log('keys: ', JSON.stringify(keys), 'values: ', JSON.stringify(values))
}

function revertKey(keys) {
  const map = {
    '商户编号': 'no',
    '商户姓名': 'name',
    '手机号': 'phoneNo',
    '直属机构': 'org',
    '商户类型': 'type',
    '创建时间': 'createTime',
    '操作': 'operation',
  }
  return keys.map(key => {
    return map[key.trim()]
  })
}

module.exports = {
  minilistSs,
  auth,
  test
}