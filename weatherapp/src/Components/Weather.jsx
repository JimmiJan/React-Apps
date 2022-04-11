import React, { useEffect, useState } from 'react'








const Weather = () => {
  const [weatherdata,setweather]=useState({})
  const [ inpuut,setInput]= useState("")

   const[set,setset]=useState("Karachi")


useEffect(()=>{
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${set}&appid=d3c4cd8f61fff7213fe085c61c8268cb&units=metric`
  )
  .then((res)=> res.json())
  // console.log(api.data)
  .then((res)=>{
    console.log(res)
    setweather(res)
  })
  .catch((err)=>{
    console.log(err)
    
  })
},[inpuut])


const Search=(e)=>{
  // console.log(e)
  setset(inpuut)
  console.log("helllo")
}


  return (
    <div>
     <h1>Weather App</h1>
     <div className='w-50 mx-auto'>
       <input type="text" className='input-group form-control' onChange={(e)=>setInput(e.target.value)} />
       <div className='pt-2'>
         <button className='btn btn-primary' onClick={Search}>Search</button>
       </div>
     </div>
     <div>
       <li>City: {weatherdata && weatherdata.name }</li>
       <li>Temp: {weatherdata && weatherdata.main && weatherdata.main.temp}</li>
       <li>Conditions:  {weatherdata && weatherdata.weather &&
               weatherdata.weather[0] &&
               weatherdata.weather[0].main}</li>
     </div>

    </div>
  )
}

export default Weather