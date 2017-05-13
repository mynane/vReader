import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import Swiper from 'react-native-swiper';
import {fetchHotData} from '../action';
import * as Service from '../service';
import HList from './common/HList';
import OneImage from './common/OneImage';
import {ComponentStyles, StyleConfig} from '../style';

class HotComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const {id} = this.props;
        Service.getHomePageItem(id).then(res => {
            this.setState({
                data: res.data
            })
        });
    }

    render() {
        const {data} = this.state;
        const {title} = this.props;
        return (
            <View
                style={ComponentStyles.container}
            >
                {
                    data.length > 0 &&
                    <HList
                        data={data}
                        title={title}
                    />
                }
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const {hotData=[]} = state.fetch;
    return {hotData};
}

export default connect(mapStateToProps)(HotComponent)