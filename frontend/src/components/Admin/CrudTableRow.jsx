import React from 'react'

const CrudTableRow = ({ el }) => {
  return (
    <tr>
      <td>{el.name}</td>
      <td>{el.role}</td>
      <td>
        <button>Editar</button>
        <button>Eliminar</button>
      </td>
    </tr>
  )
}

export default CrudTableRow
