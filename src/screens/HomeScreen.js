import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Button} from 'react-native-paper'


 
const HomeScreen = ({navigation}) => {
    const [game_id,setID] = useState("")


    const handleClick = (props) => {
        //this prop comes from app.js when we created the stack navigator
        props.navigate("Components")
        // fetching to local host will not work because the localhost ip for your iphone device and macbook are different 
        
      
        fetch("http://192.168.0.61:3000/games", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json()).then(game=> setID(game.id))
        //set game id to a state
    }
    
    //set the props to a variable because for some reason it was not being read in the handleClick method
    let propsObj= navigation
    return(  
        <View style={styles.container}>
            <Image source={{
            uri:
            "https://www.pngkit.com/png/full/136-1368972_bored-sticker-bored-tumblr-png.png"
            }}style={{ width: 300, height: 100}}/>
            <Image source={{
            uri:
            "https://www.pixelscrapper.com/sites/default/files/styles/456_scale/public/s3fs-user-content/graphic-image/user-1051/node-201425/gamer-girl-word-art-games-graphic-game-play-player-element-embellishment-blue-black.png"
            }}style={{ width: 300, height: 100}}/>
            
            <Button 
                mode="contained" 
                color="turquoise"
                onPress={()=> handleClick(propsObj)}

                
             >Start Game</Button>        
            <StatusBar style="auto" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

export default HomeScreen;
