import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Currency from 'react-currency-formatter';
import { urlFor } from '../sanity';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';

const DishRow = ({ id, name, short_description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <>
      <TouchableOpacity onPress={() => setIsPressed(!isPressed)}
        className={'bg-white border border-gray-200 ${isPressed && "border-b-0"}'}>
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
      {isPressed && (
        <View className="flex bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-2"> 
            <TouchableOpacity>
              <MinusCircleIcon size={40}color="#00CCBB"/>
            </TouchableOpacity>

            <Text>0</Text>

            <TouchableOpacity>
              <PlusCircleIcon size={40} color= "#00CCBB"/>
            </TouchableOpacity>
          </View>
        </View>
      )}

    </>
  )
}


export default DishRow