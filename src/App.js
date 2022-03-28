import React from 'react'
//import { useCarDataQuery } from '/hooks/use-car-data-query'
import { Cars } from './components/Cars'


const Index = () =>{
//Really it would be this
//const carsData = useCarDataQuery()

const carsData = [
  {
    "make": "Mazda",
    "model": "M3"
  },
  {
    "make": "Hyundai",
      "model": "Elantra"
  }
];

function prepareData(data){
   
    const finalData = [];
    data.map((item, i) => {

      finalData.push({
        index: i,
        model: item?.model,
        make: item?.make
      })

    });
    return finalData;
  }

    return(
        
        <Cars data={prepareData(carsData)}  />
   
    )
}
export default Index