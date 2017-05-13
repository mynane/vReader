import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {StyleConfig} from '../../style';

export default function TextItem(props) {
    const {_id, title, shortIntro, author, majorCate} = props.book;
    return (
        <View
            key={_id}
            style={styles.post_Item}
        >
            <View style={{flexDirection: 'row'}}>
                <View
                    style={{borderWidth: 1,
                    borderColor: '#ff8400',
                    borderRadius: 2,
                    paddingVertical: 2,
                    paddingHorizontal: 6
                }}>
                    <Text style={{color: '#ff8400', fontSize: 10}}>{majorCate}</Text>
                </View>
                <Text
                    numberOfLines={1}
                    style={{
                        color: '#333',
                        fontSize: 16,
                        maxWidth: '77%',
                        marginHorizontal: 10
                    }}
                >
                {title}
                </Text>
                <Text style={{color: '#999'}}>{author}</Text>
            </View>
            <View>
                <Text
                    numberOfLines={1}
                    style={{color: '#999', lineHeight: 20}}
                >
                    {shortIntro}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    post_Item: {
        marginVertical: 10
    }
});