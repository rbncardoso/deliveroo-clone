export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of the Dish',
      type: 'string',
      validation: (Rule)=> Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short Discription',
      type: 'string',
      validation: (Rule)=> Rule.max(200),
    },
    {
      name: 'price',
      title: 'Price of the dish',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    
  ]
}
