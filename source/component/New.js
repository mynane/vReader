import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import VList from './common/VList';
import * as Service from '../service';
import OneImage from './common/OneImage';
import {ComponentStyles, StyleConfig} from '../style';

class NewComponent extends PureComponent {
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
                    <VList
                        data={data}
                        title={title}
                    />
                }
            </View>
        );
    }
}

export default NewComponent