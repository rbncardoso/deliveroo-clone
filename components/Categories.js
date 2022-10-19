import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCards from './CategoryCards'

const Categories = () => {
  return (
    <ScrollView
    contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 10

    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
      {/**CategoryCard */}

      <CategoryCards imgUrl ="https://links.papareact.com/wru" title="Test 1"/>
      <CategoryCards imgUrl ="https://links.papareact.com/wru" title="Test 2"/>
      <CategoryCards imgUrl ="https://links.papareact.com/wru" title="Test 3"/>
      <CategoryCards imgUrl ="https://links.papareact.com/wru" title="Test 3"/>
      <CategoryCards imgUrl ="https://links.papareact.com/wru" title="Test 3"/>
      <CategoryCards imgUrl ="https://links.papareact.com/wru" title="Test 3"/>
    </ScrollView>
     
    
  )
}

export default Categories