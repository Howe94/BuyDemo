import * as ApiIP from './ApiIp';
// 登录
export const LOGIN = `${ApiIP.publicIp}/users/login`;
// 获取文章列表 
export const getArticleList = `${ApiIP.publicIp}/article/getArticleList`;
//获取作者列表
export const getAuthorsList = `${ApiIP.publicIp}/article/getAuthorList`