import * as ActionType from '../ActionType';
import * as Service from '../../service';
import * as Storage from '../../service/storage';

const parseData = (data) => {
    return {
        type: ActionType.FETCH_HOT_DATA,
        payload: data
    }
} 

export default (id) => {
    return (dispatch) => {
        Service.getHomePageItem(id)
            .then(res => dispatch(parseData(res.data || [])))
    }
}