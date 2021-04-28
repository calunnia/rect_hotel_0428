import React,{useState} from "react";
import Subscription from '../Subscription/Subscription.jsx'

function Hotels({ hotel, key }) {

const [showMore, setShowMore] = useState(false)
const [showMoreInfo, setShowMoreInfo] = useState(false)

  return (
    <div className="hotel">
      {hotel.name}

      <div >
                <button onClick={()=>(setShowMore(!showMore))}>
                {showMore ? 'Show less'  : 'Show More'}
                </button>

                               
                                {
                                    showMore
                                            ? <div><button onClick={()=>(setShowMoreInfo(!showMoreInfo))}>Request More Info</button></div>
                                            : ''
                                }
                                        <div>
                                            {
                                                showMoreInfo
                                                            ? <Subscription hotel={hotel}/>
                                                            : ''
                                            }
                                            </div>
      </div>
    </div>
  );
}

export default Hotels;