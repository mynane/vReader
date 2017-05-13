import * as ActionType from '../ActionType';
import * as Service from '../../service';
import * as Storage from '../../service/storage';

const parseData = (data) => {
    return {
        type: ActionType.FETCH_HOME_DATA,
        payload: data
    }
} 

export default () => {
    return (dispatch) => {
        Storage.getItem('homeData').then(jsonData => {
            console.log(jsonData);
            if(jsonData && jsonData.length > 0) {
                dispatch({
                    type: ActionType.INIT_HOME_DATA,
                    payload: jsonData
                })
            } else {
                Service.getHomePageData()
                    .then(res => dispatch(parseData(res.data || [])))
            }
        });
    }
}