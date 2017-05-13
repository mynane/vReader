import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageItem from './ImageItem';
import TextItem from './TextItem';
import {StyleConfig} from '../../style';

export default function OneImage(props){
    const {title, data} = props;
    return (
        <View>
            <View style={styles.title}>
                <Text style={styles.title_Text}>
                    {title}
                </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 20, marginVertical: 10}}>
                <Text style={styles.menu1}>科幻</Text>
                <Text style={styles.menu2}>科幻</Text>
                <Text style={styles.menu3}>科幻</Text>
                <Text style={styles.menu4}>科幻</Text>
            </View>
            <View style={styles.post}>
                {
                    data.map((item, index) => {
                        if(index===0) {
                            return (
                                <ImageItem book={item.book} />
                            )
                        } else {
                            return (
                                <TextItem book={item.book} />
                            )
                        }
                        
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
    post: {
        paddingHorizontal: 10
    },
    menu1: {
        backgroundColor: '#90c5f0',
        borderRadius: 2,
        borderWidth: 1,
        paddingHorizontal: 14,
        paddingVertical: 6,
        color: '#FFFFFF',
        borderColor: 'transparent'
    },
    menu2: {
        backgroundColor: '#f6bc7e',
        borderRadius: 2,
        borderWidth: 1,
        paddingHorizontal: 14,
        paddingVertical: 6,
        color: '#FFFFFF',
        borderColor: 'transparent'
    },
    menu3: {
        backgroundColor: '#67ccb7',
        borderRadius: 2,
        borderWidth: 1,
        paddingHorizontal: 14,
        paddingVertical: 6,
        color: '#FFFFFF',
        borderColor: 'transparent'
    },
    menu4: {
        backgroundColor: '#e78f8f',
        borderRadius: 2,
        borderWidth: 1,
        paddingHorizontal: 14,
        paddingVertical: 6,
        color: '#FFFFFF',
        borderColor: 'transparent'
    },
});