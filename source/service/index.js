import * as Request from './request';
import {HomeDataId} from '../config';
import {Platform} from 'react-native';

export const getHomePageData = () => {
    return Request.get(`http://api.zhuishushenqi.com/recommendPage/nodes/${HomeDataId}`)
}

export const getHomePageSwiper = (id) => {
    return Request.get(`http://api.zhuishushenqi.com/recommendPage/node/spread/${id}?pl=${Platform.OS}`)
}

export const getHomePageItem = (id) => {
    return Request.get(`http://api.zhuishushenqi.com/recommendPage/books/${id}`)
}