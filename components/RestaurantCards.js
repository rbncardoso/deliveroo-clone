import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'

const RestaurantCards = ({
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
}) => {
  
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity 
    onPress={()=>{
      navigation.navigate('Restaurant', {
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
      })
    }}
    className="bg-white mx-3 shadow">
      
      
      <Image 
      source={{
        uri:urlFor(imgUrl).url(),
      }}
      className="h-36 w-64 rounded-sm"
      />

      <View className="px-3 pb-4">

        <Text className="font-bold text-xl pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
            <StarIcon color="green" opacity={0.6} size={22}/>
            <Text className="text-xs text-gray-500">
             <Text className="text-green-500">{rating}</Text> . {genre}</Text>

        </View>
     

        <View className="flex-row">
          <MapPinIcon color="gray" size={22} opacity={0.4}/>
          <Text className="text-xs text-gray-500">Nearby {address}</Text>
        </View>

        <Text>RestaurantCards</Text>

      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCards