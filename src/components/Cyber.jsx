import React from 'react'

function Cyber({data3}) {
  return<>
   <div className="all-card">
    <div className="card" style={{"width":"18rem"}}>
  <img src={data3.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h3>{data3.title}</h3>
    <p className="card-text">{data3.des}</p>
  </div>
</div>
</div>
  </>
}

export default Cyber