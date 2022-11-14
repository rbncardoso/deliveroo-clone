import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { selectBasketItems } from '../features/basketSlice'
import { XCircleIcon } from 'react-native-heroicons/solid'

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems);
  }, [items]);


  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className=" flex-1 bg-gray-100">
        <View className="p-5 border-b boder-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="font-bold text-lg text-center">BasketScreen</Text>
            <Text className="text-sm text-gray-400 text-center">{restaurant.title}</Text>
          </View>
          <TouchableOpacity onPress={navigation.goBack}
            className="absolute top-3 right-5 rounded-full">
            <XCircleIcon color="#00CCBB" size={50} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen