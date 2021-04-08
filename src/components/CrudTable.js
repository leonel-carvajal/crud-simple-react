import React from 'react'
import CrudTableRow from './CrudTableRow'

const CrudTable = ({data,deleteData,setdatatoEdit}) => {
  return (
    <div>
      <h2>Tabla de datos</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            data.length === 0 ? <tr><td colSpan='3'>Sin datos</td></tr> :
              data.map(el => (
                <CrudTableRow
                  deleteData={deleteData}
                  el={el}
                  key={el.id}
                  setdatatoEdit={setdatatoEdit}
                  />
              ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default CrudTable
