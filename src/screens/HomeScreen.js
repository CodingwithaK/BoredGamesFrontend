import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';



const handleClick = () => {
    // props.navigation.navigate("Components")
    fetch("http://192.168.0.23:3000/games", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})})
 

    
}
const HomeScreen = (props) => {

    
    return(  
        <View style={styles.container}>
            <Image source={{
            uri:
            "https://www.clipartkey.com/mpngs/m/220-2207505_bored-boring-lame-freetoedit.png"
            }}style={{ width: 300, height: 100}}/>
            <Text>  Games </Text>
            <Button 
                onPress={()=> handleClick()}
                title="Start Game"
                
            />         
            <StatusBar style="auto" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default HomeScreen;
