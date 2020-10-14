import React,{useEffect,useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Cards from '../components/Card'

// import { TouchableOpacity } from 'react-native-gesture-handler';


const fetchData = () =>{
    //swap the ip when you get home
fetch("http://192.168.0.61:3000/games")
.then(res=> res.json())
.then(console.log)
}
const ComponentsScreen = () =>{
    const cards = [
        {
            name: "buff card",
            effect: "+ 1 attack"
        },
        {
            name:"debuff card",
            effect: "- 1 health"
        },
        {
            name: "monster",
            effect: " set player attack to 1",
            health: "health: 6",
            attack: "attack: 1"
        },
        {
            name: "buff card",
            effect: " + 1 health"
        },
        {
            name: "debuff card",
            effect: "- 1 attack"
        }, 
        {
            name:"treasure",
            effect: "gain +1 health  "
    
        },
        {
            name:"monster",
            effect: "none",
            health: "health: 2",
            attack: "attack: 2"
        },
        {
            name: "trap",
            effect: "take two damage"
        },
       
        { 
            name: "monster",
            effect: "take 1 damage",
            health:"health: 1",
            attack:"attack: 1"
        }
    ]
    
    
    return(
        <View style={styles.mainContainer}>
        {
            cards.map((card,i)=>{
                return(
                   
                    <Cards 
                        key={i}
                        style={styles.containerStyle}
                        >
                        
                            <Text>{card.name}</Text>
                            <Text>{card.effect}</Text>
                            <Text>{card.health}</Text>
                            <Text>{card.attack}</Text>
                      
                     
                        
                    </Cards>   
                    
                )

            })
        }
    </View> 

)
}
const styles = StyleSheet.create({
    mainContainer:{
        alignItems: 'center',
      justifyContent: 'center',
        flex:1,
        flexWrap: 'wrap',
        flexDirection:'row'
    },
    containerStyle:{
        padding:10,
        backgroundColor:"white",
        borderWidth:0,
        marginBottom:10,
        marginLeft:10,
        marginRight:10,
        borderColor:"#808080",
        marginTop:50,
        elevation:10
    }
})
export default ComponentsScreen