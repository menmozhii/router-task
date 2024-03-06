import React from 'react'

function Career({data4}) {
  return<>
  <h1>{data4.title}</h1>
  <div className="card-careeer">
  <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: `url('${data4.image}')`}}></div>
  </div>

  </>
}

export default Career