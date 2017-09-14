import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    RefreshControl
} from 'react-native';

import ListItem from './ListItem'
import API from '../api/API';

var dimensions = require('Dimensions');
let screenWidth = dimensions.get('window').width;


export default class ContentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: [],
            isRefreshing: false
        }
    }
    render() {
        if (!this.state.isLoaded)
            return (
                <Text style={{ fontSize: 20, textAlign: 'center' }}>正在加载中...</Text>
            );
        else
            return (
                <FlatList
                    data={this.state.data}
                    renderItem={(itemData) => this.renderItem(itemData)}
                    style={{ margin: 10 }}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={() => this.refresh()}
                            title="加载中..."
                        />
                    }
                    onEndReachedThreshold={5}
                    onEndReached={()=>this.loadData()}
                />
            );
    }

    componentDidMount() {
        this.fetchData();
    }


    renderItem(itemData) {
        // console.log(itemData);
        var item = itemData.item;
        var userName = '匿名用户';
        var userPic = '';
        var image_size = [0,0];
        if (item.user != null) {
            userName = item.user.login;
            userPic = item.user.medium;
        }
        if (item.image_size != null){
            var rate = item.image_size.m[0]/(screenWidth-20);
            image_size[0] = screenWidth-20;
            image_size[1] = item.image_size.m[1]/rate;
        }
        return (
            <ListItem
                content={item.content}
                user_name={userName}
                user_pic={'http:' + userPic}
                vote_up={item.votes.up}
                comments_count={item.comments_count}
                share_count={item.share_count}
                format={item.format}
                source={'http:' + item.high_loc}
                pic_size={image_size}
            />
        );
    }


    fetchData() {
        var url = API.qiubai;
        fetch(url).
            then((responseData) => responseData.json()).
            then((jsonData) => {
                this.setState({
                    data: jsonData.items,
                    isLoaded: true
                });
            });

    }

    refresh() {
        console.log('refresh');
        this.fetchData();
    }
    loadData(){
        console.log('loadData');
        var url = API.qiubai;
        fetch(url).
            then((responseData) => responseData.json()).
            then((jsonData) => {
                this.setState({
                    data: this.state.data.concat(jsonData.items),
                    isLoaded: true
                });
            });
    }
}