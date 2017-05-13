import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {StyleConfig} from '../../style';

export default function ImageTitleItem(props) {
    const {_id, cover, title, shortIntro} = props.book;
    return (
        <View
            key={_id}
            style={styles.post_Item}
        >
            <Image
                style={{height: StyleConfig.screen_width * 3 / 10}}  
                source={{uri: cover}}
            />
            <Text
                numberOfLines={1}
                style={{
                    color: '#333',
                    fontSize: 14,
                    marginTop: 5
                }}
            >
                {shortIntro}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    post_Item: {
        marginVertical: 10,
        width: StyleConfig.screen_width * 2 / 9
    }
});