import React from 'react'

function Datas({data2}) {
  return<>
   <div className="all-card">
    <div className="card" style={{"width":"18rem"}}>
  <img src={data2.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h3>{data2.title}</h3>
    <p className="card-text">{data2.des}</p>
  </div>
</div>
</div>
  </>
}

export default Datas