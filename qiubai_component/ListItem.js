import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';

export default class ListItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.userInfo}>
                    <Image source={{ uri: this.props.user_pic }} style={styles.userPic} />
                    <Text style={styles.userName}>
                        {this.props.user_name}
                    </Text>
                </View>
                <Text style={styles.content}>
                    {this.props.content}
                </Text>
                {this.renderMedia(this.props.format, this.props.source, this.props.pic_size)}
                <Text style={styles.VoteUp}>
                    {'好笑 ' + this.props.vote_up + ' - 评论 ' + this.props.comments_count + ' - 分享 ' + this.props.share_count}
                </Text>
            </View>
        );
    }

    renderMedia(format, source,pic_size) {
        if ('video' == format) {
            return (
                <View style={{ width: 90, height: 90, backgroundColor: 'gray' }}>

                </View>
            );
        } else if ('image' == format) {
            return (
                <Image style={{ width: pic_size[0], height: pic_size[1] }}
                    source={{uri:source}}/>
            );
    }
}
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'column',
        marginBottom:5
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    userPic: {
        height: 40,
        width: 40,
        borderRadius: 40
    },
    userName: {
        fontSize: 14,
        color: 'rgb(142,142,142)',
        fontWeight: 'bold',
        marginLeft: 5
    },
    content: {
        fontSize: 16,
        marginTop: 3,
        marginBottom: 3,
        color: 'rgb(54,54,54)'
    },
    VoteUp: {
        marginTop: 15,
        marginBottom: 15
    }
});