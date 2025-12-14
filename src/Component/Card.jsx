import React from 'react'
import './Card.css';

const Card = (props) => {
  return (
    <div className='parent'>
        <div className='top'>
            <img src={props.data.logo} alt="amazon" />
            <button> Save</button>
            
        </div>
        <div className='middle'>
            <h3>{props.data.company}<span> {props.data.posted}</span></h3>
            <p>{props.data.role}</p>
            <button>Part-time</button>
            <button>Senior Level</button>
        </div>
        <div className='bottom'>
            <div><h5>{props.data.salary} </h5>
            <p>{props.data.location}</p>
            </div>
            

            <button>Apply now </button>
        </div>
      
    </div>
  )
}

export default Card
