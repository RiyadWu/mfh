const cookie = {}

function getCookie() {
  if (!cookie.BIGipServerpool_SD_DaiLiShang || !cookie.JSESSIONID) {
    return null
  }

  return `BIGipServerpool_SD_DaiLiShang=${cookie.BIGipServerpool_SD_DaiLiShang}; JSESSIONID=${cookie.JSESSIONID}`
}

function setCookie(newCookie) {
  cookie.BIGipServerpool_SD_DaiLiShang = newCookie.BIGipServerpool_SD_DaiLiShang
  cookie.JSESSIONID = newCookie.JSESSIONID
}

module.exports = {
  getCookie,
  setCookie
}