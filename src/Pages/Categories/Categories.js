import React from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import Config from 'react-native-config'
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from '../../components/loading'
import Error from '../../components/error'
import CategoriesCard from "../../components/CategoriesCard/CategoriesCard";
import styles from './Categories.style'



const Categories = ({navigation}) => {

    const {loading, data, error} =useFetch(Config.API_CATEGORIES_URL);


    const handleProductSelect = (name) => {
        navigation.navigate('Meals',{name})
    }



    const renderCategories = ( {item} ) => <CategoriesCard onselect={ () =>  handleProductSelect(item.strCategory) }  meal={item}   >  </CategoriesCard>

    if(loading){
        return <Loading></Loading>
    }

    if (error) {
        return  <Error></Error>
    }
   
  
   

    return (
        <SafeAreaView  style={styles.container} >
            <FlatList data={data.categories} renderItem={renderCategories}/> 
        </SafeAreaView>
    )
};

export default Categories;
