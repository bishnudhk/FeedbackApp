import React from 'react'

export default function Header({text}) {
  return (
    <header>
        <div className='container'>
            <h1>{text}</h1>
        </div>
    </header>
  )
}

