import req from './http'

//首页所有直播
export const list = mes => req('get', "/api/home/mix",mes)


//分类
export const classify = mes => req('get', "/api/cate/list",mes)


//每个游戏分类列表
export const rooms = mes => req('get', "/api/room/list",mes)