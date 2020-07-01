import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/myAssets/list',
    method: 'get',
    params
  })
}
