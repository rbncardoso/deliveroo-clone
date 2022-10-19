import { View, Text, SafeAreaView, Image, TextInput, ScrollView} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Header } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcons, ChevronDoubleRightIcon, AdjustmentsHorizontalIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon,} from "react-native-heroicons/outline";
import Categories from '../components/Categories';



const HomeScreen = () => {

 const navigation = useNavigation();
 

 useLayoutEffect(()=>{
   navigation.setOptions({
     headerShown: false,
     })

 },[]);

  return (
   //in IOs, in Android doens't work
    <SafeAreaView className="bg-white pt-5 mt-1 "> 
     
        {/*Header */}
        <View className=" flex-row  pb-3 items-center mx-4 space-x-2 ">
          <Image source={{uri: "https://links.papareact.com/wru",}}
            className = "h-7 w=7 bg-gray-300 p-4 rounded-full "
          />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <Text className="font-bold text-xl">Current location
              <ChevronDownIcon size={20} color="#00CCBB"/>
            </Text>
            
           </View>
           <UserIcon size={35} color="#00CCBB"  />
            
        </View>
        {/* Search */}
        <View className="flex-row  items-center space-x-2 pb-2 mx-4 px-1">
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 ">
            <MagnifyingGlassIcon size={25} color="#00CCBB" />
            {/**all this space is 'cause flex-1 is not working, solve sun */}
            <TextInput placeholder='Restaurant and cuisine' 
                      keyboardType='default' 
            />
            
          </View>
          <AdjustmentsVerticalIcon className="" size={35} color="#00CCBB"/>
        </View>
        {/**Body */}
          <ScrollView 
          className="bg-gray-100"
          contentContainerStyle={{
              paddingBottom: 100,
          }}
          >
          {/**Categorie */}
          <Categories />
          
          {/**Feature rows */}
        </ScrollView>
    
    </SafeAreaView>
   
   
       
    
  )
}

export default HomeScreen