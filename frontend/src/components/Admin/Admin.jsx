/* eslint-disable multiline-ternary */
/* eslint-disable react/jsx-indent */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './admin.module.css'
import {
  getProductsThunk,
  postProductsThunk,
  updateProductsThunk,
  deleteProductsThunk,
} from '../../store/slices/products.slice'
import { getStaffThunk } from '../../store/slices/staff.slice'
import { getAllTickets } from '../../store/slices/tickets.slice'
import Navbar from '../Navbar/Navbar'
import flechita from '../../assets/icons/fi_chevron-right.svg'
import { Form, Formik, Field, ErrorMessage } from 'formik'

const Admin = () => {
  const [dashboardStatus, setDashboardStatus] = React.useState('products')
  const [modal, setModal] = React.useState(true)
  const [editModal, setEditModal] = React.useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    setModal(false)
    setEditModal(false)
    dispatch(getProductsThunk())
    dispatch(getStaffThunk())
    dispatch(getAllTickets())
  }, [])

  const products = useSelector(state => state.products)
  const staff = useSelector(state => state.staff)
  const tickets = useSelector(state => state.tickets.allTickets)

  const setStatus = element => {
    setDashboardStatus(element.target.value)
  }

  const createProduct = product => {
    setModal(false)
    dispatch(postProductsThunk(product))
    alert('Product created successfully')
    window.location.reload()
  }

  const updateProduct = product => {
    setEditModal(false)
    dispatch(updateProductsThunk(product))
    alert('Product updated successfully')
    window.location.reload()
  }

  const deleteProduct = event => {
    console.log(event.target.value)
    event.preventDefault()
    setEditModal(false)
    dispatch(deleteProductsThunk(event.target.value))
    alert('Product deleted successfully')
    window.location.reload()
  }

  const validateProduct = values => {
    const errors = {}
    if (!values.name) {
      errors.name = 'required*'
    }
    if (!values.price) {
      errors.price = 'required*'
    }
    if (!values.description) {
      errors.description = 'required*'
    }
    if (!values.category) {
      errors.category = 'required*'
    }

    return errors
  }

  return (
    <div>
      <Navbar isShowed={true} />
      <div className={style.body}>
        <div>
          <h2 className={style.h2}>Administration</h2>
          <div className={style.navbar}>
            <div>
              <button
                className={dashboardStatus === 'products' ? style.btnn : style.btn}
                onClick={setStatus}
                value="products"
              >
                Products
              </button>
            </div>
            <div>
              <button
                className={dashboardStatus === 'staff' ? style.btnn : style.btn}
                onClick={setStatus}
                value="staff"
              >
                Staff
              </button>
            </div>
            <div>
              <button
                className={dashboardStatus === 'tickets' ? style.btnn : style.btn}
                onClick={setStatus}
                value="tickets"
              >
                Tickets
              </button>
            </div>
          </div>
        </div>

        {dashboardStatus === 'products' ? (
          <div>
            <img src={flechita} alt="" className={style.flechita} />
            <h2 className={style.h2}>Products</h2>
            <button onClick={() => setModal(!modal)} className={style.buttonNew}>
              New Product
            </button>
            {modal === true ? (
              <div className={style.modalContainer}>
                <div className={style.modalBody}>
                  <div>
                    <h1>Create new product</h1>
                    <Formik
                      initialValues={{
                        name: '',
                        image: '',
                        category: '',
                        price: '',
                        time: '',
                        description: '',
                        available: true,
                      }}
                      onSubmit={createProduct}
                      validate={validateProduct}
                    >
                      <Form className={style.form}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}
                        >
                          <h3>Name:</h3>
                          <span style={{ color: 'red' }}>
                            <ErrorMessage name="name" />
                          </span>
                        </div>
                        <Field name="name" type="text" className={style.inputs}></Field>

                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}
                        >
                          <h3>Image url:</h3>
                          <span style={{ color: 'red' }}>
                            <ErrorMessage name="image" />
                          </span>
                        </div>
                        <Field name="image" type="url" className={style.inputs}></Field>

                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}
                        >
                          <h3>Category:</h3>
                          <span style={{ color: 'red' }}>
                            <ErrorMessage name="category" />
                          </span>
                        </div>

                        <Field name="category">
                          {({ field }) => (
                            <select {...field} className={style.inputs}>
                              <option value="" disabled>
                                -select-
                              </option>
                              <option value="Drinks">Drinks</option>
                              <option value="Appetizers">Appetizers</option>
                              <option value="MainDishes">MainDishes</option>
                              <option value="Desserts">Desserts</option>
                            </select>
                          )}
                        </Field>

                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}
                        >
                          <h3>Price:</h3>
                          <span style={{ color: 'red' }}>
                            <ErrorMessage name="price" />
                          </span>
                        </div>
                        <Field name="price" type="number" className={style.inputs}></Field>

                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}
                        >
                          <h3>Time:</h3>
                        </div>
                        <Field name="time" type="text" className={style.inputs}></Field>

                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}
                        >
                          <h3>Description:</h3>
                          <span style={{ color: 'red' }}>
                            <ErrorMessage name="description" />
                          </span>
                        </div>
                        <Field name="description" type="textarea" className={style.inputs}></Field>

                        <button type="submit" className={style.buttonCreate}>
                          Create
                        </button>
                      </Form>
                    </Formik>
                  </div>
                  <button className={style.modalClose} onClick={() => setModal(!modal)}>
                    X
                  </button>
                </div>
              </div>
            ) : null}

            <div className={style.props}>
              <div className={style.containerTitle}>
                <h3></h3>
                <h3>Name</h3>
                <h3>Category</h3>
                <h3>Price</h3>
                <h3>Description</h3>
                <h3></h3>
                <h3></h3>
              </div>
              {products?.map(p => (
                <div className={style.container} key={p.id}>
                  <img src={p.image} alt="" />
                  <p>{p.name}</p>
                  <p>{p.category}</p>
                  <p>${p.price}</p>
                  <p>{p.description}</p>
                  <button
                    onClick={() => setEditModal(!editModal)}
                    value={p._id}
                    className={style.btnedit}
                  >
                    Edit
                  </button>
                  {editModal === true ? (
                    <div className={style.modalContainer}>
                      <div className={style.modalBody}>
                        <div>
                          <h1>Edit Product</h1>
                          <Formik
                            initialValues={{
                              _id: p._id,
                              name: p.name,
                              image: p.image,
                              category: p.category,
                              price: p.price,
                              time: p.time,
                              description: p.description,
                            }}
                            onSubmit={updateProduct}
                          >
                            <Form className={style.form}>
                              <Field name="name" type="text" placeholder="Product Name"></Field>
                              <Field name="image" type="url" placeholder="Product image"></Field>
                              <Field name="category">
                                {({ field }) => (
                                  <select {...field}>
                                    <option value="">Category</option>
                                    <option value="Drinks">Drinks</option>
                                    <option value="Appetizers">Appetizers</option>
                                    <option value="MainDishes">MainDishes</option>
                                    <option value="Desserts">Desserts</option>
                                  </select>
                                )}
                              </Field>

                              <Field name="price" type="number"></Field>
                              <Field
                                name="time"
                                type="text"
                                placeholder="Product cooking time "
                              ></Field>
                              <Field
                                name="description"
                                type="text"
                                placeholder="Product description"
                              ></Field>

                              <Field
                                name="available"
                                type="checkbox"
                                placeholder="Available"
                              ></Field>
                              <button type="submit">Create</button>
                            </Form>
                          </Formik>
                        </div>
                        <button
                          className={style.modalClose}
                          onClick={() => setEditModal(!editModal)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  ) : null}

                  <button value={p._id} className={style.btndel} onClick={deleteProduct}>
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {dashboardStatus === 'staff' ? (
          <div>
            <div>
              <img src={flechita} alt="" className={style.flechita} />
              <h2 className={style.h2}>Staff</h2>
              <button onClick={() => setModal(!modal)} className={style.buttonNew}>
                New Staff
              </button>
              {modal === true ? (
                <div className={style.modalContainer}>
                  <div className={style.modalBody}>
                    Modal Staff
                    <button className={style.modalClose} onClick={() => setModal(!modal)}>
                      X
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
            <div className={style.props}>
              <div className={style.containerTitle}>
                <h3></h3>
                <h3>Name</h3>
                <h3>Password</h3>
                <h3>Role</h3>
                <h3>Tables</h3>
                <h3></h3>
                <h3></h3>
              </div>
              {staff?.map(s => (
                <div className={style.containerStaff} key={s.id}>
                  <img src={s.image} alt="" height="70px" width="100px" />
                  <p>{s.name}</p>
                  <p>{s.password}</p>
                  <p>{s.role}</p>
                  <p>{s.tables?.map(t => t).join(' - ')}</p>
                  <button value={s.id} className={style.btnedit}>
                    Edit
                  </button>
                  <button value={s.id} className={style.btndel}>
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {dashboardStatus === 'tickets' ? (
          <div>
            <img src={flechita} alt="" className={style.flechita} />
            <h2 className={style.h2}>Tickets</h2>
            <button onClick={() => setModal(!modal)} className={style.buttonNew}>
              New Ticket
            </button>
            {modal === true ? (
              <div className={style.modalContainer}>
                <div className={style.modalBody}>
                  Modal Ticket
                  <button className={style.modalClose} onClick={() => setModal(!modal)}>
                    X
                  </button>
                </div>
              </div>
            ) : null}
            <div className={style.props}>
              <div className={style.containerTitle}>
                <h3>Client Name</h3>
                <h3>Table</h3>
                <h3>Staff</h3>
                <h3>State</h3>
                <h3>Total Price</h3>
                <h3></h3>
                <h3></h3>
              </div>
              {tickets?.map(t => (
                <div className={style.containerTickets} key={t.id}>
                  <p>{t.clientName}</p>
                  <p>{t.table}</p>
                  <p>{t.staff}</p>
                  <p>{t.status}</p>
                  <p>${t.totalPrice}</p>
                  <button value={t.id} className={style.btnedit}>
                    Edit
                  </button>
                  <button value={t.id} className={style.btndel}>
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Admin
