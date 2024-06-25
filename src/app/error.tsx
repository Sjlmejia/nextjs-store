"use client"
import React from 'react'

const GlobalError = ({reset}: ErrorPageProps) => {
  return (
    <>
      <div>Opsh Ah Ocurrido un error</div>
      <button onClick={reset}>Intentar de Nuevo</button>
    </>
  )
}

export default GlobalError