import CrudTableRow from './CrudTableRow'

const CrudTable = ({ data }) => {
  return (
    <div>
      <h3>Tabla de DATOS</h3>
      <br />
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3">Sin Datos</td>
            </tr>
          ) : (
            data.map(el => <CrudTableRow key={el.id} el={el} />)
          )}
        </tbody>
      </table>
    </div>
  )
}

export default CrudTable
