import React from 'react'


const Cars = (props) => {
return(
    <>
    {props.data.map(car =>{
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