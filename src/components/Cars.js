import React from 'react'


const Cars = (props) => {
  
return(
    <>
    <p>
    {props.nonMappedData.title}
    </p>
    <p>
    {props.nonMappedData.secondThing}
    </p>
    <p>
    {props.nonMappedData.thirdThing}
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