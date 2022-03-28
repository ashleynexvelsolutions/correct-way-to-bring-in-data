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
  title: carsData?.title,
  secondThing: carsData?.secondThing,
  thirdThing: carsData?.thirdThing
}


  function prepareData(data){
   
    const finalData2 =[];
    data.cars.map((item, i) => {

      finalData2.push({
        index: i,
        make: item?.make,
        model: item?.model
      })

    });
    return finalData2;
  }

    return(
        
        <Cars nonMappedData={finalData} mappedData={prepareData(carsData)}  />
   
    )
}
export default Index