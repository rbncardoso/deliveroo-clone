import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Currency from 'react-currency-formatter';
import { urlFor } from '../sanity';

const DishRow = ({ id, name, short_description, price, image }) => {
  return (
    <TouchableOpacity className="bg-white border border-gray-200">
      <View className="flex-row ">

        <View className="flex-1 pl-2 py-4">
          <Text className="text-lg mb-1">{name}</Text>
          <Text className="text-gray-400">{short_description}</Text>
          <Text className="text-gray-400 mt-2 ">
            <Currency quantity={price} currency="CVE" />
          </Text>
        </View>

        <View className="pt-3">
          <Image
            style={{
              broderWith: 1,
              borderColor: "#F3F3F4",
            }}
            source={{ uri: urlFor(image).url() }}
            className="h-20 w-20 bg-gray-300 p-4"
          />
        </View>
      </View>

    </TouchableOpacity>
  )
}


export default DishRow