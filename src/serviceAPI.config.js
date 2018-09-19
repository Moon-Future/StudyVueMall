const BASEURL = "https://www.easy-mock.com/mock/5b9e9c792b292b0e9154c6cd/vueMall"
const LOCALURL = "http://localhost:3000/"
const URL = {
    getShoppingMallInfo: BASEURL,
    getGoodsInfo: BASEURL + 'getGoodsInfo',
    registerUser: LOCALURL + 'user/register',
    login: LOCALURL+'user/login'
}
module.exports = URL