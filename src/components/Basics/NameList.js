import React from 'react'
import Person from './Person';

export default function NameList() {
  const names = ['Bruce', 'Clark', 'Diana']
  const people = [
    { id: 1, name: 'Eufránio', age: 30, skill: 'React' }, 
    { id: 2, name: 'Creuma', age: 25, skill: 'Angular' },
    { id: 3, name: 'Diana', age: 25, skill: 'Vue' }
  ];

  const nameList = names.map((name, index) => ( <h2 key={index}>{ name }</h2>
  ))

  return (
    <div>
      {
        nameList
      }
    </div>
  )
}
