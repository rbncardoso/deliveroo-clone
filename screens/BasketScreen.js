import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'
import Currency from 'react-currency-formatter'

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();
  const basketTotal = useSelector(selectBasketTotal);

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
            <Text className="font-bold text-lg text-center">Basket</Text>
            <Text className="text-sm text-gray-400 text-center">{restaurant.title}</Text>
          </View>
          <TouchableOpacity onPress={navigation.goBack}
            className="absolute top-3 right-5 rounded-full">
            <XCircleIcon color="#00CCBB" size={50} />
          </TouchableOpacity>
        </View>
        <View className="flex-row space-x-4 items-center bg-white px-3 py-3 my-5">
          <Image
            source={{
              uri: "https://links.papareact.com/wru"
            }}
            className="h-8 w-8 rounded-full p-4"
          />
          <Text className="flex-1"> Deliver in 50-75min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-2">
              <Text>{items.length} x</Text>
              <Image
                source={{ uri: urlFor(items[0]?.image).url() }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-600">
                <Currency quantity={items[0]?.price} currency="CVE" />
              </Text>

              <TouchableOpacity>
                <Text
                  className="text-[#00CCBB] text-xs"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
          
          <View className="p-5 bg-white mt-5 space-y-4">
            <View className="flex-row justify-between">
              <Text className="text-gray-400">SubTotal</Text>
              <Text className="text-gray-400">
                <Currency quantity={basketTotal} currency="CVE"/>
              </Text>
            </View>
          </View>

      </View>
    </SafeAreaView>
  )
}

export default BasketScreen