import { Link } from '@chakra-ui/react'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h1>No existe la ruta</h1>
      <Link href='/store'>
        Volver a store
      </Link>
    </div>
  )
}

export default NotFound