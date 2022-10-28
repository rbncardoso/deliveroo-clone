import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { ArrowDownLeftIcon, ArrowLongLeftIcon, MapPinIcon, StarIcon } from 'react-native-heroicons/solid';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';

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
        lat,
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
         source={{uri: urlFor(imgUrl).url(),}}
         className={"w-full h-56 bg-gray-300 p-4"}
        />
       <TouchableOpacity
        onPress={navigation.goBack}
        className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
       >
        <ArrowLeftIcon size={20} color="#00CCBB" /> 
      </TouchableOpacity>
    </View>

    
     <View className="bg-white p-4">
      <View>
        <Text className="font-bold text-3xl  ">{title} </Text>
        </View>
        
        <View className="flex ">
          <View className="flex-row items-center space-x-2 pb-3">
             <StarIcon size={25} color="grey" opacity={0.7}/>
             <Text>{rating}</Text>
             <MapPinIcon size={25} color="grey" opacity={0.7}/>
          <Text>{address}</Text>
          </View>
        </View>

        <View>
          <Text>{shortDescription}</Text>
        </View>
     </View>
  </ScrollView>
  )
}

export default RestaurantScreen