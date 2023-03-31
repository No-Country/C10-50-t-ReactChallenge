import React, { useState, useEffect } from 'react'

const initialForm = {
  name: '',
  role: '',
  id: null,
}

const CrudForm = () => {
  const [form, setForm] = useState({ initialForm })

  const handleChange = e => {}

  const handleSubmit = e => {}

  const handleReset = e => {}

  return (
    <div>
      <h3>Agregar</h3>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="role"
          placeholder="Rol"
          onChange={handleChange}
          value={form.role}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  )
}

export default CrudForm
