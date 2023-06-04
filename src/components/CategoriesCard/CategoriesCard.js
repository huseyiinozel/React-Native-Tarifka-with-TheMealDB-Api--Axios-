import React from "react";
import { TouchableWithoutFeedback,View,Image,Text } from "react-native";
import styles from './CategoriesCard.style'

function CategoriesCard ({meal,onselect}) {
    return (
        <TouchableWithoutFeedback onPress={onselect} >
            <View style={styles.container}  >
                
            
            <Image style={styles.image}  source={{uri: meal.strCategoryThumb}}   />
            
                <Text style={styles.title}> {meal.strCategory}</Text>
                
                
                </View>

            


        







        </TouchableWithoutFeedback>
        

    )


}


export default CategoriesCard;