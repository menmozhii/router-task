import React from 'react'

function Career({data4}) {
  return<>
<div className="all-card">
    <div className="card" style={{"width":"18rem"}}>
  <img src={data4.image} className="card-img-top" alt="..." width="100" height="100"/>
  <div className="card-body">
    <h3>{data4.title}</h3>
    <p className="card-text">{data4.des}</p>
  </div>
</div>
</div>

  </>
}

export default Career