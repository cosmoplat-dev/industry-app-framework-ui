import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/userInfo/getUser',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/auth/logoff',
    method: 'post'
  })
}
