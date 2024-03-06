import React from 'react'

function All({data}) {
 
  return<>
 
    <div className="all-card">
    <div className="card" style={{"width":"18rem"}}>
  <img src={data.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h3>{data.title}</h3>
    <p className="card-text">{data.des}</p>
  </div>
</div>
</div>


  
   
</>
}

export default All