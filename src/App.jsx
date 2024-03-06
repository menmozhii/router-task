
import Nav from './components/Nav'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import All from './components/All'
import Datas from './components/Datas'
import Fsd from './components/Fsd'
import Career from './components/Career'
import Cyber from './components/Cyber'
// import { useState } from 'react'
import python from './image/python.jpeg'
import ai from './image/ai.jpg'
import cyber from './image/cyber.jpeg'
import three from './image/three.jpeg'
import js from './image/js.png'
import react from './image/react.jpeg'
import mongo from './image/mongo.png'
import node from './image/node.png'
import ds from './image/ds.png'
import cl from './image/cl.jpeg'
import ps from './image/ps.jpeg'
import cs from './image/cs.png'
import cr from './image/cr.jpeg'
import './App.css'
import About from './components/About'



function App() {
  const data=[{
    title:"python",
    image:python,
    des:"Python is an interpreted, object-oriented, high-level programming language with dynamic semantics developed by Guido van Rossum"
  },
  {
    title:"Artificial Intelligence",
    image:ai,
    des:"Artificial intelligence (AI) refers to the simulation or approximation of human intelligence in machines. The goals of artificial intelligence include computer-enhanced learning, reasoning, and perception",
  },
  {
    title:"cycber security",
    image:cyber,
    des:"Cybersecurity is the practice of protecting internet-connected systems such as hardware, software and data from cyberthreats."
  },
]
// full stack developer data//
const data1=[{
title:"HTML CSS BOOTSTRAP",
des:"HTML is the standard markup language for Web pages.CSS is the language we use to style an HTML document.",
image:three
},
{
  title:"JAVASCRIPT",
  des:"JavaScript is the world's most popular programming language.",
  image:js
},
{
  title:" REACT",
  des:"React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development.",
  image:react
},{
  title:"MONGO DB",
  des:"MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like",
  image:mongo
},
{
  title:"NODE JS",
  des:"Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser",
  image:node
}]
const data2 =[{
  title:"datascience",
  des:"Data science is the study of data to extract meaningful insights for business. It is a multidisciplinary approach that combines principles and practices from the fields of mathematics, statistics, artificial intelligence, and computer engineering to analyze large amounts of data",
  image:ds
},
{
  title:"Cloud Computing",
  des:"Cloud Computing provides scalable resources for storing, processing, and analyzing large datasets in data science. Services like AWS, Google Cloud, and Azure ...",
  image:cl
},

]
const data3 =[{
  title:"principles of cyber security",
  des:"The syllabus covers network security, cryptography, cyber laws, cloud security, and many more. Each course's syllabus is meticulously designed to empower individuals keen on Cyber Security, helping them to advance their careers.",
  image:ps
},
{title:"Secure Coding and Security ",
des:"The first step is to determine what is most vital to your business and put controls around those assets. For example, in your organization, financial information or client data might be the most crucial aspect of your business.  A hierarchical list of what is most important to your organization will give you a roadmap to building your cyber defenses.",
image:cs},

]
const data4=[{
  title:"",
  des:"",
  image:cr
}]
  
  return (
    <>
   <BrowserRouter>
   <div id="wrapper">
   <Nav />
   <About />
   <Routes>
   
    <Route  path ="/all" element= {data.map((e,i)=>{
      return<All data={e} key ={i} /> })}/>
    <Route  path="/fsd" element ={ data1.map ((e,i)=>{ return <Fsd data1 ={e} key ={i}/>})}/>
    <Route  path ="/data science" element ={ data2.map ((e,i)=>{return <Datas data2 ={e} key ={i}/>})}/>
    <Route  path ="/cyber security" element ={ data3.map ((e,i)=>{return <Cyber data3 ={e} key ={i}/>})}/>
    <Route  path ="/career" element ={ data4.map ((e,i)=>{return <Career data4 ={e} key ={i}/>})}/>
    <Route path = "*" element = {<Navigate to='/all'/>}/>
   </Routes>

 </div>
   </BrowserRouter>
   
    </>
  )
}

export default App
