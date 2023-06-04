import React from 'react';
import { View,Image,Text,Button,TouchableOpacity,ScrollView,Linking } from 'react-native';
import styles from './DetailsCard.style';


function DetailsCard ({item}) {
    const handleWatchYoutube = () => {

        
        const youtubeUrl = item.strYoutube;
    
        Linking.openURL(youtubeUrl);
      };
    return (
        <ScrollView >
        <View >
            <Image  source={{ uri: item.strMealThumb }} style={styles.image} />
            <Text style={styles.title}> {item.strMeal} </Text>
            <Text style={styles.count}> {item.strArea} </Text>
            <Text style={styles.desc} >{item.strInstructions}</Text>
            <TouchableOpacity  onPress={handleWatchYoutube}  style={styles.button} >
                <Text style={styles.label} > Watch On Youtube</Text>
            </TouchableOpacity>

            


        </View>
        </ScrollView>



    )




}

export default DetailsCard;