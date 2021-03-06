import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header'
import Content from './components/content'
import Total from './components/total'
//import App from './App'
//import './index.css'

const App = () => {
  const course = 'Half Stack application development'
  /*const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14*/

  const courseInfo = [
    {part: 'Fundamentals of React', exercises: 10},
    {part: 'Using props to pass data', exercises: 7},
    {part: 'State of a component', exercises: 14}
  ]

  return (
    <div>
      <Header course = {course}/>
      <Content courseInfo = {courseInfo}/>
      <Total courseInfo= {courseInfo} />
    </div>
  )
}


 /*const Content = ( props ) => {
  const {part1, part2, part3, exercises1, exercises2, exercises3} = props
  return (
   <div>
    <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
   </div>
  )
 
 }*/


//  const Total = ( props ) => {
//   const {exercises1, exercises2, exercises3} = props
//   return (
//    <div>
//     <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//    </div>
//   )
 
//  }





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)