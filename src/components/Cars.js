import React from 'react'


const Cars = (props) => {
  
return(
    <>
    <p>
    {props.data.title}
    </p>
    <p>
    {props.data.secondThing}
    </p>
    <p>
    {props.data.thirdThing}
    </p>
    {props.data.cars.map(car =>{
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