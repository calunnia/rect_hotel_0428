import React,{useState} from 'react'

function Subscription({hotel}) {

 const [email, setEmail]  = useState('') 


const startPost = () => {






}



    return (
        <div className="subscription">
            <h3>Request More Info about</h3>
           <p>{hotel.city} /  {hotel.stars} &#9733;</p> 
            <input type="email" onChange={(ev)=>(setEmail(ev.target.value))}/>
            <button disabled={!email.includes('.') && !email.includes('@')} onClick={()=>(startPost())}>Send</button>
        </div>
    )
}

export default Subscription
