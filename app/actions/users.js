import types from '../constants/types'

exports.LoginUser = function (data) {
  return { 
    type: types.LOG_IN_USER, 
    data
  };
}

exports.LogoutUser = function () {
  return { 
    type: types.LOG_OUT_USER
  };
}