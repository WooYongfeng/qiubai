import React, { Component } from 'react';
import {
    View,
    Text,
    ListView,
} from 'react-native';

import Header from './Header';

import ContentList from './ContentList'

export default class QiubaiView extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'rgb(255,255,255)' }}>
                <Header />
                <ContentList />
            </View>
        );
    }
}



