import React from 'react'


export default function Cardss(props) {
    return (
        <div className="card custom-card-2" style={{width:"18rem"}}>
          <img src={props.link} class="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title text-secondary">{props.title}</h5>
  
    <p className="card-text text-secondary">{props.des}</p>
   {props.val} 
    
    
  
 
  </div>
</div>
    )
}