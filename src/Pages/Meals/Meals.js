import React from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import Config from 'react-native-config'
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from '../../components/loading'
import Error from '../../components/error'
import MealsCard from "../../components/MealsCard/MealsCard";




const Meals = ({navigation , route}) => {

    const {name} = route.params;

    

    const {loading, data, error} =useFetch(Config.API_MEALS_URL + name);

    
    const handleMealsSelect = (id) => {
        navigation.navigate('Details',{id})
    }

    /*

    const renderCategories = ( {item} ) => <CategoriesCard onselect={ () =>  handleProductSelect(item.strCategory) }  meal={item}   >  </CategoriesCard>
    */
   

    const renderMeals = ( {item} ) => <MealsCard onselect={()  => handleMealsSelect(item.idMeal) }      info={item}  ></MealsCard>


    if(loading){
        return <Loading></Loading>
    }

    if (error) {
        return  <Error></Error>
    }
   
  
   

    return (
        <SafeAreaView >
            <FlatList data={data.meals} renderItem={renderMeals}/> 
            
        </SafeAreaView>
    )
};

export default Meals;