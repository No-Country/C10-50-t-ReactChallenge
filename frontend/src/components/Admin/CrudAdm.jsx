import React, { useState } from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'

const initialDB = [
  {
    id: 1,
    name: 'Johm',
    role: 'Mozo',
  },
  {
    id: 2,
    name: 'Jeff',
    role: 'Mozo',
  },
  {
    id: 3,
    name: 'Peter',
    role: 'Chef',
  },
  {
    id: 4,
    name: 'Kenya',
    role: 'Mozo',
  },
  {
    id: 5,
    name: 'Linda',
    role: 'Chef',
  },
]

const CrudAdm = () => {
  const [db, setDB] = useState(initialDB)
  return (
    <div>
      <h2>CrudAdm</h2>
      <br />
      <CrudForm />
      <br />
      <CrudTable data={db} />
      <br />
    </div>
  )
}

export default CrudAdm
