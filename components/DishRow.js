import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Currency from 'react-currency-formatter';
import { urlFor } from '../sanity';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { useSelector, useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from '../features/basketSlice';

const DishRow = ({ id, name, short_description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch()

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, short_description, price, image }))
  };
  const removeItemFromBasket =()=>{
    dispatch(removeFromBasket({id}));
  };

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
            <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemFromBasket}
            >
              <MinusCircleIcon size={40} color={items.length > 0 ? "#00CCBB" : "gray"} />
            </TouchableOpacity>

            <Text>{items.length}</Text>

            <TouchableOpacity
              onPress={addItemToBasket}
            >
              <PlusCircleIcon size={40} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}

    </>
  )
}


export default DishRow