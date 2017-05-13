import React, { Component } from 'react';
import {
    View, 
    Text,
    Platform,
    ScrollView,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

import SwiperComponent from '../component/Swiper';
import HotComponent from '../component/Hot';
import FeaturedComponet from '../component/Featured';
import NewComponet from '../component/New';

import {fetchHomeData}  from '../action';
import {ComponentStyles} from '../style';

class Home extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        // dispatch(fetchHomeData());
    }

    render() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={ComponentStyles.container}
            >
                <SwiperComponent />
                <HotComponent
                    id="57832d0fbe9f970e3dc4270c"
                    title="本周热推"
                />
                <NewComponet
                    id="57832d5ebe9f970e3dc4270d"
                    title="出版精品"
                />
                <FeaturedComponet
                    id="57832d8b73ae187d3b67f86a"
                    title="男生精选"
                />
                <FeaturedComponet
                    id="57832da0be9f970e3dc4270e"
                    title="女生精选"
                />
                <NewComponet
                    id='57832dd5aaa765203b9b5282'
                    title="男频新书"
                />
                <NewComponet
                    id='585257a84343d8922967153d'
                    title="女频新书"
                />
                <NewComponet
                    id='57832de5898fa3cb3b965ef5'
                    title="男频完本"
                />
                <NewComponet
                    id='585257c809e2e46b274154ed'
                    title="女频完本"
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

const mapStateToProps = (state) => {
    const {fetch} = state;
    return {...fetch};
}

export default connect(mapStateToProps)(Home)
