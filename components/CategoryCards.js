import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCards = ({imgUrl, title}) => {
  return (
    <TouchableOpacity className="mr-2">
      <Image 
        source={{uri: imgUrl,}}
      className="w-20 h-20 rounded"
      />
      <Text className="font-bold absolute bottom-1 text-white left-1">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCards