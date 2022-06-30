import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App'
//import './index.css'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const excercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const excercises3 = 14

  return (
    <div>
      <Header course = {course}/>
      <Content part1 = {part1} part2 = {part2} part3 = {part3} excercises1 = {excercises1} exercises2 = {exercises2} excercises3 = {excercises3}/>
      <Total excercises1= {excercises1} exercises2 = {exercises2} excercises3 = {excercises3} />
    </div>
  )
}


const Header = ({course}) => {
  return (
   <div>
   <h1>{course}</h1>
   </div>
  )
 
 }

 const Content = ({ part1, part2, part3, excercises1, exercises2, excercises3 }) => {
  return (
   <div>
    <p>
        {part1} {excercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {excercises3}
      </p>
   </div>
  )
 
 }

 const Total = ({excercises1, exercises2, excercises3}) => {
  return (
   <div>
    <p>Number of exercises {excercises1 + exercises2 + excercises3}</p>
   </div>
  )
 
 }





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)