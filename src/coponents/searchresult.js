import React,{useState} from 'react'
import {
Text,
View,
Button,
Image
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'
const Searchresult =(props)=>{
    const navigation = useNavigation();
    // const [searchData, setsearchData] =useState([]);
    // setsearchData(props)
    const url = `https://i.ytimg.com/vi/${props.videoId}/mqdefault.jpg`
    return(
        <TouchableOpacity style={{flexDirection:'row',marginTop:30}}
        
        onPress  ={()=>{navigation.navigate('video',{...props})}}
        >
            <Image 
             source={{uri:url}}
             style={{height:200,width:300}}
            />
            <View>
                <Text>RAGHUVANSH MANI</Text>
            </View>
        </TouchableOpacity>
    )
}
export default Searchresult;