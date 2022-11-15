import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { removeFromBasket, selectBasketItems } from '../features/basketSlice'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'
import Currency from 'react-currency-formatter'

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
              uri: "https://links.papareact.com/wru"  }}
              className="h-8 w-8 rounded-full p-4"
          />
          <Text className="flex-1"> Deliver in 50-75min</Text>
          <TouchableOpacity>
              <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
         </View>

         <ScrollView>
          {Object.entries(groupedItemsInBasket).map(([key,items])=>(
            <View key={key} className="flex-row items-center">
              <Text>{items.length} x</Text>
              <Image 
                source={{uri: urlFor(items[0]?.image).url()}}
                className="h-12 w-12 rounded-full"
              />
              <Text>{items[0]?.name}</Text>
              <Text>
                <Currency quantity={items[0]?.price}  currency="CVE"/>
              </Text>

              <TouchableOpacity>
                <Text 
                className="text-[#00CCBB] text-xs"
                onPress={()=>dispatch(removeFromBasket({id:key}))}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
         </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen