import React from 'react'

function Fsd({data1}) {
  return<>
  <div className="all-card">
    <div className="card" style={{"width":"18rem"}}>
  <img src={data1.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h3>{data1.title}</h3>
    <p className="card-text">{data1.des}</p>
  </div>
</div>
</div>

  </>
}

export default Fsd