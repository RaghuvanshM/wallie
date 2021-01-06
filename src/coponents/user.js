import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    FlatList,
    TextInput,
    Button
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import SearchResult from './searchresult'
const User = () => {
    const [data,setData] = useState([]);
    const [value,setValue] = useState('');
    useEffect(() => {
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&type=video&key=AIzaSyBnpmpWM8ztn6w8UoJjVk0L6N71Jd4Gink`
        fetch(url)
            .then(res => res.json())
            .then(data => {
               setData(data.items)
            })
            
 }, [])
 const fetchData = () => {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${value}&type=video&key=AIzaSyBnpmpWM8ztn6w8UoJjVk0L6N71Jd4Gink`
    fetch(url)
        .then(res => res.json())
        .then(data => {
           
            setData(data.items)
        })
       
}
return (
    <View>
        <View style={{ flexDirection: 'row' }}>
            <TextInput
                placeholder="search for results"
                style={{ fontSize: 18, width: '70%', borderWidth: 1, marginTop: 20, marginLeft: 20 }}
                value={value}
                onChangeText={(text) => setValue(text)}
            />
            <View style={{ width: '20%', marginTop: 25, marginLeft: 10 }}>
                <Button
                    title="Search"
                    onPress={() => { fetchData() }}

                />
            </View>
        </View>
    <FlatList
     data ={data}
     renderItem={({item})=>{
        return <SearchResult
         videoId={item.id.videoId}
         title={item.snippet.title}
         channel={item.snippet.channelTitle}
        />
    }}
    keyExtractor={item=>item.id.videoId}
    />
</View>
    
)
}
export default User;