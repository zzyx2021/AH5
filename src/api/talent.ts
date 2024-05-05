import request from "@/utils/request";

//获取验证码
export function getCode(data: any) {
  return request({
    url: '/login/code',
    method: 'post',
    data: data
  })
}

//登录接口
export function login(data: any) {
  return request({
    url: '/login',
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
