import React from 'react'
import PropTypes from 'prop-types'
export const PrimerComponente = ({titulo, subtitulo = 4}) => {

  console.log(titulo);
  console.log(subtitulo);

  return (
    <>
        <h1> {titulo} </h1>   
        
        <h1> {subtitulo + 1} </h1>   
    </>   
  )
}


PrimerComponente.propTypes = 
{
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.number.isRequired
}

