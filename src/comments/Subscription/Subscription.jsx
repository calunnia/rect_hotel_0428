import React,{useState} from 'react'
import Loading from '../LoadingMask/LoadingMask.jsx'

function Subscription({hotel,showMoreInfo}) {

    const [email, setEmail] = useState('')
    const [data, setData] = useState([])
    const [loading, setLoading] =useState(false)
   const [message,setMessage] = useState('')
   
const startPost = (hotel, email)=>{
   
    setLoading(true)
    setData([])
   
   console.log('email=', email);
   console.log('hotel=',hotel);
   
    fetch(`/api/hotels/subscribe`,{
       method:"POST",
       headers: {  'Authorization' : 'dsadkfjghdfkhd',
       'Accept': 'application/json, text/plain, */*',
       'Content-Type': 'application/json'
               },
       body: JSON.stringify({"email": email,"hotel":hotel.name })
                                   }
       )
   
           .then((resopnse) => (resopnse.json()))
           .then((responseAdat) => {setData(responseAdat); setMessage( responseAdat.success ? 'subscribed':'already subscribed')
       })
           .catch(error=>{
                           console.log('error=',error );
                           setData(null)
                        })
           .finally( () => {
               console.log('fetch end');
               setLoading(false)
              setTimeout( () => {
                  setMessage('');
                  showMoreInfo(false)
            }               ,5000)
                            })
   
    }

  if (message !=="")
     return <h3>{message}</h3>
  else
     return (
        <div className="subscription">
            <h3>Request More Info about</h3>
           <p>{hotel.city} /  {hotel.stars} &#9733;</p> 
            <input type="email" onChange={(ev)=>(setEmail(ev.target.value))}/>
            <button disabled={!email.includes('.') && !email.includes('@')} onClick={()=>(startPost(hotel.name,email))}>Send</button>
        </div>
    )
}

export default Subscription
