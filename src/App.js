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


function prepareData(data){
   
    const finalData = [];
   

      finalData.push({
        title: data?.title,
        secondThing: data?.secondThing,
        thirdThing: data?.thirdThing
      })

    
    return finalData;
  }
  function prepareData2(data){
   
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
        
        <Cars nonMappedData={prepareData(carsData)} mappedData={prepareData2(carsData)}  />
   
    )
}
export default Index