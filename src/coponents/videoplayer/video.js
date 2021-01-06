import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

class MyWebComponent extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        const url =`https://www.youtube.com/embed/${this.props.route.params.videoId}`
        console.log(url)
        return (
            <View style={{height:'50%',width:'100%'}}>
            <WebView
             source={{ uri:url }}
            />
            </View>
        )
    }
}
export default MyWebComponent;