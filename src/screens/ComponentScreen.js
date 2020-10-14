import React,{useEffect,useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Cards from '../components/Card'
import FlipCard from 'react-native-flip-card';

// import { TouchableOpacity } from 'react-native-gesture-handler';



const ComponentsScreen = () =>  {
    
    
    
    return(
    

<FlipCard>
  {/* Face Side */}
  <View style={{height:300,width:500,backgroundColor:"red"}}>
    <Text >The Face</Text>
  </View>
  {/* Back Side */}
  <View style={{height:300,width:500,backgroundColor:"blue"}}>
    <Text>The Back</Text>
  </View>
</FlipCard>
  );
};

export default ComponentsScreen