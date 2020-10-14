import React,{useState} from 'react'
import {View,Text,StyleSheet} from 'react-native'
// import{CardSection} from 'react-native-super-grid'
import{Card} from 'react-native-elements'
import CardFlip from 'react-native-card-flip'
import FlipCard from 'react-native-flip-card'
const Cards = (props) =>{
    // const [card,flipCard] = useState("");


    return(
        // <View>
        //     <View style={{height:100,width:100, backgroundColor:"blue"}}/>
        //     <Button onPress={()=>{
            

        //     }}>{title}</Button>
        // </View>
    
        
            // <FlipCard  style={{height:200,width:100}}>

    //    <View style={styles.containerStyle}>

    // <Text>front </Text>
    //    </View>
       <View 
       style={styles.containerStyle}
       >
           {props.children}
       </View>
        // </FlipCard>
   
        
       
    )
}

const styles = StyleSheet.create({
   
    containerStyle:{
        padding:10,
        height:100,
        width:100,
        backgroundColor:"white",
        borderWidth:0,
        marginBottom:10,
        marginLeft:10,
        marginRight:10,
        borderColor:"#808080",
        marginTop:10,
        elevation:10
    }
})

export default Cards