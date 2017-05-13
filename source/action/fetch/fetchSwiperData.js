import * as ActionType from '../ActionType';
import * as Service from '../../service';
import * as Storage from '../../service/storage';

const parseData = (data) => {
    console.log(data);
    return {
        type: ActionType.FETCH_SWIPER_DATA,
        payload: data
    }
} 

export default (id) => {
    return (dispatch) => {
        Storage.getItem('swiperData').then(jsonData => {
            // if(jsonData && jsonData.length > 0) {
            //     dispatch({
            //         type: ActionType.INIT_SWIPER_DATA,
            //         payload: jsonData
            //     })
            // } else {
                Service.getHomePageSwiper(id)
                    .then(res => dispatch(parseData(res.data || [])))
            // }
        });
    }
}