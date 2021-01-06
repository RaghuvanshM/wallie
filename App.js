import React from 'react';
import 'react-native-gesture-handler';
import {
  Text,
  View
} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import SignUpcomponent from './src/coponents/signup'
import TabComponent from './navigation/bottomTab'
import { createStackNavigator } from '@react-navigation/stack';
import VidoPlayerComponent from './src/coponents/videoplayer/video'
const Stack = createStackNavigator();
const App =()=>{
  return(
    <NavigationContainer>
       <Stack.Navigator>
      <Stack.Screen name="SignUpcomponent" component={SignUpcomponent} />
      <Stack.Screen name="TabSceen" component={TabComponent} />
      <Stack.Screen name="video" component={VidoPlayerComponent} />
    </Stack.Navigator>
    </NavigationContainer>
  
  )
}
export default App