import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
  const cart = useSelector(state=>state.cartReducer)
  return (
    <div className='container mt-5'>
      { cart?.length>0? <div className="row mt-5">
        <div className="col-lg-8">
          <h3 style={{height:'40px'}} className='mt-5'>Cart Summary</h3>
          <table className='table shadow mt-3'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product,index)=>(
                <tr key={index}>
                <td>{index+1}</td>
                <td>{product.title} </td>
                <td> <img style={{height:'100px',width:'100px'}} src={product.thumbnail} alt="" /></td>
                <td>$ {product.price}</td>
                <td> <button className='btn'><i class="fa-solid fa-trash text-danger"></i></button></td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-lg-4 mt-5">
          <div className='d-flex flex-column border rounded p-4'>
            <h5 style={{height:'40px'}}>Total Product: <span className='fw-bolder'>3</span></h5>
            <h3 style={{height:'40px'}}>Total Amount: <span className='fw-bolder'>$560</span></h3>
            <hr/>
            <div className='d-grid'>
              <button className='btn btn-success'>Checkout</button>
            </div>
          </div>

        </div>
      </div>:
      <div className='text-center mt-5'>
      <img width={'25%'} height={'250px'} src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="" />
      <h1 style={{height:'52px'}} className='mt-3 '>Your Cart is Empty!!!</h1>
   </div>}
    </div>
  )
}

export default Cart