const BASE_URL = 'http://119.18.194.36'

const APIS = {
  HOME: BASE_URL + '/',
  LOGIN: BASE_URL + '/logOutOperate.do',
  IMAGE: BASE_URL + '/image.do',
  USERS: BASE_URL + '/miniIf/MinilistSs',
  PROVINCES: BASE_URL + '/commonUtils/getProv.do',
  LOCATION: BASE_URL + '/miniIf/miniSavePlaceData',
  USER_LOCAITON: BASE_URL + '/miniIf/miniModifyPlace?mno='
}

module.exports = APIS