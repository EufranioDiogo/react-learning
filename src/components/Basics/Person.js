import React from 'react'

export default function Person({person}) {
  const {name, skill, age} = person;
  return (
    <div style={{borderBottom: '2px solid #333', marginBottom: '10px'}}>
    <h2>Name: {name}</h2>
    <h2>Skill: {skill}</h2>
    <h2>Age: {age}</h2>
  </div>
  )
}
