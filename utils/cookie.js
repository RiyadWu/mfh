const cookie = {}

function getCookie() {
  if (!cookie.BIGipServerpool_SD_DaiLiShang || !cookie.JSESSIONID) {
    return null
  }

  return `BIGipServerpool_SD_DaiLiShang=${cookie.BIGipServerpool_SD_DaiLiShang}; JSESSIONID=${cookie.JSESSIONID}`
}

// JSESSIONID=82267E26222529456267228A9E91B50F; Path=/; HttpOnly
// BIGipServerpool_SD_DaiLiShang=738283530.36895.0000; path=/

function parseRawCookies(rawCookies) {
  const newCookie = {}
  rawCookies.forEach(rawCookie => {
    const cookieStr = rawCookie.split(';')[0]
    const cookieArr = cookieStr.split('=')
    newCookie[cookieArr[0]] = cookieArr[1]
  })
  return newCookie
}


function setCookie(rawCookies) {
  const newCookie = parseRawCookies(rawCookies)
  cookie.BIGipServerpool_SD_DaiLiShang = newCookie.BIGipServerpool_SD_DaiLiShang
  cookie.JSESSIONID = newCookie.JSESSIONID
}

module.exports = {
  getCookie,
  setCookie
}