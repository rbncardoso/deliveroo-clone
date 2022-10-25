import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCards from './RestaurantCards'
import client from '../sanity'

const FeaturedRow = ({id,title, description}) => {
  const [restaurants, setRestaurants] = useState([]);


  useEffect(()=>{

    client.fetch(
      `
      *[_type == "featured" && _id == $id]{
          ...,
          restaurants[]->{
           ...,
           dishes[]->,
           type->{
           name
          }
        },
      }[0]
    `,
     {id}
    ).then((data)=>{
      setRestaurants(data?.restaurants);
    });
  },[]);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4 ">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB"/>
      </View>

      <Text className="text-xs text-gray-500 mx-4">{description}</Text>

      <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
      showsHorizontalScrollIndicator={false}
      className="pt-4"
      >
        {/**RestaurantCards */}
        <RestaurantCards 
        id={12}
        imgUrl="https://links.papareact.com/wru"
        title="Yo! Sushi"
        rating={4.0}
        genre = "Japanese"
        address="123 Main Street"
        shortDescription="This is a test description"
        dishes="Sushi"
        long={20}
        lat={20}

        />

        <RestaurantCards 
        id={12}
        imgUrl="https://links.papareact.com/wru"
        title="Yo! Sushi"
        rating={4.0}
        genre = "Japanese"
        address="123 Main Street"
        shortDescription="This is a test description"
        dishes="Sushi"
        long={20}
        lat={20}

        />
         <RestaurantCards 
        id={12}
        imgUrl="https://links.papareact.com/wru"
        title="Yo! Sushi"
        rating={4.0}
        genre = "Japanese"
        address="123 Main Street"
        shortDescription="This is a test description"
        dishes="Sushi"
        long={20}
        lat={20}

        />
         <RestaurantCards 
        id={12}
        imgUrl="https://links.papareact.com/wru"
        title="Yo! Sushi"
        rating={4.0}
        genre = "Japanese"
        address="123 Main Street"
        shortDescription="This is a test description"
        dishes="Sushi"
        long={20}
        lat={20}

        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow