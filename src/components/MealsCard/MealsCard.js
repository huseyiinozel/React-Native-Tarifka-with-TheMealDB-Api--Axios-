import React from "react";
import { SafeAreaView,Text,View,ImageBackground,Image,TouchableWithoutFeedback } from "react-native";
import styles from './MealsCard.style';

function MealsCard ({info,onselect}){
    
   
    const image = {uri: info.strMealThumb};
    



    
    return (
        
        <TouchableWithoutFeedback onPress={onselect} >
        <View style={styles.container}>
        <View style={styles.imageContainer}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            
            <Text style={styles.text}>{info.strMeal} </Text>
            
            </ImageBackground>
            </View>
            
  </View>
  </TouchableWithoutFeedback>
  
  
  );
}
    




export default MealsCard;
