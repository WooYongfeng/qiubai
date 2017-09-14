import React, { Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

var dimensions = require('Dimensions');
let screenWidth = dimensions.get('window').width;

export default class Header extends Component {
    render() {
        return (
            <View style={{
                width: screenWidth,
                height: 60,
                backgroundColor: 'rgb(255,188,4)',
                flexDirection: 'row',
                alignItems:'center',
                padding:5
            }} >
                <Image source={require('../img/qiubai_logo.png')}
                style={{
                    height:40,
                    width: 40
                }}/>
                <Text style={{
                    color: 'white',
                    fontSize: 20,
                    margin:5
                }}>
                    糗事百科
                    </Text>
            </View >
        );
    }
}