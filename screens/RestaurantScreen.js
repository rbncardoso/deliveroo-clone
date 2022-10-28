import { View, Text, ScrollView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';

const RestaurantScreen = () => {
  const navigation = useNavigation();

  const {
    params: {
        id,
        imgUrl,
        title,
        rating, 
        genre,
        address,
        shortDescription,
        dishes,
        long,
        lat
  },} = useRoute();

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown: false,
      })
 
  },[]);

  return (
    <ScrollView>
      <View className="relative">

      <Image 
        source={{uri: urlFor(imgUrl).url()}}
        />
      </View>
    <View>
      <Text>RestaurantScreen</Text>
    </View>
    </ScrollView>
  )
}

export default RestaurantScreen