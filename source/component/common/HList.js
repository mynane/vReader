import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageItem from './ImageItem';
import TextItem from './TextItem';
import {StyleConfig} from '../../style';

export default function HList(props){
    const {title, data} = props;
    return (
        <View>
            <View style={styles.title}>
                <Text style={styles.title_Text}>
                    {title}
                </Text>
            </View>
            <View style={styles.post}>
                {
                    data.map((item) => {
                        return (
                            <ImageItem book={item.book} />
                        )
                    })
                }
            </View>
            <View style={{alignItems: 'center'}}>
                <View style={{width: 68, flexDirection: 'row'}}>
                    <Text style={{marginRight: 6, color: '#b93321'}}>查看更多</Text>
                    <Icon name="ios-arrow-forward" style={{color: '#b93321', fontSize: 14}}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        borderLeftWidth: 2,
		borderColor: '#ff0000',
        marginVertical: 10,
        paddingLeft: 10,
    },
    title_Text: {
        color: '#222',
        fontWeight: 'bold',
        fontSize: 18
    },
    post:{
        paddingHorizontal: 10
    }
});