import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {StyleConfig} from '../../style';

export default function ImageItem(props) {
    const {_id, cover, title, shortIntro, author, latelyFollower, majorCate, isSerial} = props.book;
    return (
        <View
            key={_id}
            style={styles.post_Item}
        >
            <Image
                style={{width: 61, height: 83}}  
                source={{uri: cover}}
            />
            <View
                style={{flex: 1, marginLeft: 20, paddingRight: 10}}
            >
                <View style={{flexDirection: 'row'}}>
                    <Text
                        numberOfLines={1}
                        style={{
                            color: '#333',
                            fontSize: 16,
                            maxWidth: '93%'
                        }}
                    >
                        {title}
                    </Text>
                    <Text
                        style={{
                            backgroundColor: '#b93321',
                            color: '#ffffff',
                            marginLeft: 6,
                            paddingHorizontal: 4,
                            borderRadius: 6,
                            fontSize: 10,
                            height: 14,
                        }}
                    >
                        {isSerial ? '连载' : '完结'}
                    </Text>
                </View>
                <View style={{ marginVertical: 4}}>
                    <Text
                        numberOfLines={2}
                        style={{color: '#999', lineHeight: 20}}
                    >
                        {shortIntro}
                    </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: '#666'}}>{author}</Text>
                        <Text style={{marginHorizontal: 6}}>|</Text>
                        <Text style={{color: '#666'}}>
                            <Text style={{color: '#b93321'}}>{latelyFollower}</Text>
                            人气
                        </Text>
                    </View>
                    <View style={{borderWidth: 1, borderColor: '#ff8400', borderRadius: 2, paddingVertical: 2, paddingHorizontal: 6}}>
                        <Text style={{color: '#ff8400', fontSize: 10}}>{majorCate}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    post_Item: {
        flexDirection: 'row',
        marginVertical: 10
    }
});