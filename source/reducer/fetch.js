import * as ActionType from '../action/ActionType';
import * as Storage from '../service/storage';

export default (state = {}, action) => {
    const {payload, type} = action;
    switch(type) {
        case ActionType.FETCH_HOME_DATA:
            Storage.setItem('homeData', payload);
            return Object.assign({}, state, {
                homeData: payload
            })
        case ActionType.INIT_HOME_DATA:
            return Object.assign({}, state, {
                homeData: payload
            })
        case ActionType.FETCH_SWIPER_DATA:
            Storage.setItem('swiperData', payload);
            return Object.assign({}, state, {
                swiperData: payload
            })
        case ActionType.INIT_SWIPER_DATA:
            return Object.assign({}, state, {
                swiperData: payload
            })
        case ActionType.FETCH_HOT_DATA:
            return Object.assign({}, state, {
                hotData: payload
            })
        default:
            return {};
    }
}