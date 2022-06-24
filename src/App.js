import React from 'react'
//import { useCarDataQuery } from '/hooks/use-car-data-query'
import { Cars } from './components/Cars'


const Index = () =>{
//Really it would be this
//const carsData = useCarDataQuery()

const carsData = 
  {
  "title":"hey this is a title",
  "secondThing": "hey this is another thing",
  "cars":[
    {
      "make": "Mazda",
      "model": "M3"
    },
    {
      "make": "Hyundai",
        "model": "Elantra"
    }
  ],
  "thirdThing": "yet another thing"
}

const finalData = {
  title: carsData.title,
  secondThing: carsData.secondThing,
  thirdThing: carsData.thirdThing,
  cars: carsData.cars.length &&
        carsData.cars.map((car, i)=>{
          return{
            index: i,
            make: car.make,
            model: car.model
          }
        })
}




    return(
        
        <Cars data={finalData}  />
   
    )
}
export default Index