"use client";

import Error from 'next/error';
import React, { useEffect } from 'react'

interface ErrorProps {
  error: Error;
  reset: () => void;
}
const ErrorHandle = ( {error, reset}: ErrorProps) => {
  
  useEffect(() => {
    console.error(error);
  }, []);
  return (
    <div>
      <h1>:(</h1>
      <p>Ha Ocurrido un error</p>
      <button onClick={reset}>Intentar de Nuevo</button>
    </div>
  )
}

export default ErrorHandle