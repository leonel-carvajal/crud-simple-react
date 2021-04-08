import React from 'react'
import styled from 'styled-components';
const Button = styled.button`
  width:100px;
  padding:0.7em;
  outline:none;
  background-color:${({ bg }) => bg};
  color:#fff;
  font-weight:600;
  border-radius:10px;
  border:1px solid #ccc;
  cursor:pointer;
`
const CrudTableRow = ({el}) => {
  return (
    <>
      <tr>
        <td>{el.name}</td>
        <td>{el.constellation}</td>
        <td>
          <Button bg={'orange'}>Editar</Button>
          <Button bg={'tomato'}>Eliminar</Button>
        </td>
      </tr>
    </>
  )
}

export default CrudTableRow;
