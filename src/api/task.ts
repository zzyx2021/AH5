import request from "@/utils/request";

//获取验证码
export function getCode(data: any) {
  return request({
    url: '/login/code',
    method: 'post',
    data: data
  })
}

//协议文件接口
export function getPolicy(data: any) {
  return request({
    url: 'polocy_protocol/list?id=16',
    method: 'get',
    params: data
  })
}

//城市列表接口
export function getCityList() {
  return request({
    url: 'sys/city/list',
    method: 'get'
  })
}

//banner列表接口
export function getBannerList(data: any) {
  return request({
    url: '/home/banner/list',
    method: 'get',
    params: data
  })
}

//职位类型接口
export function getPositionList() {
  return request({
    url: '/position/positionTypeApi',
    method: 'get',
  })
}
