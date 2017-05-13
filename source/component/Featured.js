import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import OneImage from './common/OneImage';
import * as Service from '../service';
import {ComponentStyles, StyleConfig} from '../style';

class FeaturedComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
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
        const {title} = this.props;
        const {data} = this.state;
        return (
            <View
                style={ComponentStyles.container}
            >
                {
                    data.length > 0 &&
                    <OneImage
                        data={data}
                        title={title}
                    />
                }
            </View>
        );
    }
}

export default FeaturedComponent