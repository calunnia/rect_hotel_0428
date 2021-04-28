import './App.css'
import React,{useState,useEffect} from 'react'
import LoadingMask from './comments/LoadingMask/LoadingMask'
import Hotels from './comments/Hotels/Hotels'

const App = () => {
const [data,setData] = useState([])
const [loading,setLoading] = useState(false)

useEffect(() => {
  setLoading(true)
  setData([])
     
     fetch(`/api/hotels`)
       .then((resopnse) => (resopnse.json()))
       .then((responseAdat)=>(setData(responseAdat)))
       .catch(error=>{
                       console.log('error=',error );
                       setData(null)
       })
       .finally( () => {
                         console.log('fetch end');
                         setLoading(false)
       })
     
  return () => {
   // cleanup
  }
}, [])

    console.log('data', data);


  return (
    <div className="App">
      <h1>Hotel</h1>
      {loading && <LoadingMask/>}

      {
        data===null 
                    ? <p>Something happened</p>
                    : data.map((hotel, i)=>( <Hotels hotel={hotel} key={i.toStirng + '-hotel'}/>))
      }
    </div>
  )
}

export default App
