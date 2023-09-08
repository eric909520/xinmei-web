import request from "@/utils/request"

export function getAuth(params) {
    return request({
        url: '/api/dsj-gpd-system/oauth/captcha/arithmetic',
        method: 'get',
        params
    })
}