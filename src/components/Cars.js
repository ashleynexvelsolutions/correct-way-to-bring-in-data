import React from 'react'


const Cars = (props) => {
  
return(
    <>
    <p>
    {props.nonMappedData[0].title}
    </p>
    <p>
    {props.nonMappedData[0].secondThing}
    </p>
    <p>
    {props.nonMappedData[0].thirdThing}
    </p>
    {props.mappedData.map(car =>{
        return(
            <>
 <p>
    Make: {car.make}
    </p>
    <p>
    Model: {car.model}
    </p>
    </>
        )
    })}
   
    </>
)
}
export {Cars}