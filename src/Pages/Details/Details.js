import React from "react";
import { FlatList, SafeAreaView, Text,Button } from "react-native";
import Config from 'react-native-config'
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from '../../components/loading'
import Error from '../../components/error'
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import axios from "axios";




const Meals = ({route}) => {

    const {id} = route.params;

    const {loading, data, error} =useFetch(Config.API_DETAIL_URL + id);

    
    if(loading){
        return <Loading></Loading>
    }

    if (error) {
        return  <Error></Error>
    }
   
   
   

    return (
        <SafeAreaView >
            <DetailsCard item={data.meals[0]}  ></DetailsCard>
            
            
            
        </SafeAreaView>
    )
};

export default Meals;