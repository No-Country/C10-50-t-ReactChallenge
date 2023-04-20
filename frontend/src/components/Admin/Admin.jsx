/* eslint-disable multiline-ternary */
/* eslint-disable react/jsx-indent */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './admin.module.css'
import { getProductsThunk, postProductsThunk } from '../../store/slices/products.slice'
import { getStaffThunk } from '../../store/slices/staff.slice'
import { getAllTickets } from '../../store/slices/tickets.slice'
import Navbar from '../Navbar/Navbar'
import flechita from '../../assets/icons/fi_chevron-right.svg'
import { Form, Formik, Field } from 'formik'

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

  const validateProduct = values => {
    const errors = {}
    if (!values.name) {
      errors.name = 'Name is required'
    }
    if (!values.price) {
      errors.price = 'Price is required'
    }
    if (!values.description) {
      errors.description = 'Description is required'
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
                        price: 0,
                        time: '',
                        description: '',
                        available: true,
                      }}
                      onSubmit={createProduct}
                      validate={validateProduct}
                    >
                      <Form className={style.form}>
                        <p>Name:</p>
                        <Field name="name" type="text"></Field>

                        <p>Image url:</p>
                        <Field name="image" type="url"></Field>

                        <p>Category:</p>
                        <Field name="category">
                          {({ field }) => (
                            <select {...field}>
                              <option value="Drinks">Drinks</option>
                              <option value="Appetizers">Appetizers</option>
                              <option value="MainDishes">MainDishes</option>
                              <option value="Desserts">Desserts</option>
                            </select>
                          )}
                        </Field>

                        <p>Price:</p>
                        <Field name="price" type="number"></Field>

                        <p>Time:</p>
                        <Field name="time" type="text" placeholder="Product cooking time "></Field>

                        <p>Description:</p>

                        <Field name="description" type="text"></Field>

                        <button type="submit">Create</button>
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
                    value={p.id}
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
                              name: p.name,
                              image: p.image,
                              category: p.category,
                              price: p.price,
                              time: p.time,
                              description: p.description,
                              available: p.available,
                            }}
                            onSubmit={createProduct}
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

                              <Field name="price" type="number" placeholder="Product price"></Field>
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

                  <button value={p.id} className={style.btndel}>
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
