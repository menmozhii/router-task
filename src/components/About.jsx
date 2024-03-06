import React from 'react'
import './About.css'
function About() {
  return<>
<h1 className='about' >welcome to guvi blog</h1>
<figure className="figure">
  <img src="src\image\about.jpeg" className="figure-img img-fluid rounded" alt="guvi" width="700" heigth ="700"/>
  {/* <figcaption className="figure-caption">A caption for the above image.</figcaption> */}
</figure>
  </>
}

export default About