import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCards from './CategoryCards'
import client, { urlFor } from '../sanity';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client.fetch(`
    *[_type == "category" ]
    `).then( (data) =>{
      setCategories(data);
    });
  } ,[]);

  return (
    <ScrollView
    contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 10

    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    
    >
      {categories.map((category) =>(

      <CategoryCards 
       key={category._id}
       imgUrl ={urlFor(category.image).url()}
       title={category.name}
      />
      ))}

     
    </ScrollView>
     
    
  )
}

export default Categories