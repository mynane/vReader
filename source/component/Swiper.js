import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import Swiper from 'react-native-swiper';
import {fetchSwiperData} from '../action';
import {ComponentStyles} from '../style';

class SwiperComponent extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchSwiperData('575f74f27a4a60dc78a435a3'));
    }

    renderImg() {
        const {swiperData=[]} = this.props;
        return swiperData.map((item, index) => {
                return <Image  
                            key={index}  
                            style={{flex:1}}  
                            source={{uri:item.img}}
                        />
            });
    }

    render() {
        const {swiperData} = this.props;
        return (
            <View
                style={ComponentStyles.container, {height: 120}}
            >
                {
                    swiperData && swiperData.length > 0 &&
                        <Swiper
                            height={120}  
                            loop={true}  
                            index={0}  
                            autoplay={true}  
                            horizontal={true}
                            showsPagination={false}
                        >  
                            {this.renderImg()}  
                        </Swiper>
                }  
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const {swiperData=[]} = state.fetch;
    return {swiperData};
}

export default connect(mapStateToProps)(SwiperComponent)
