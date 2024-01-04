import React from 'react'
import { Card, Row,Col,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../Redux/Slices/wishlistSlice'

function Wishlist() {
  const dispatch = useDispatch()
    const wishlist = useSelector(state=>state.wishlistSlice.wishlist)
  return (
    <div className='container' style={{marginTop:'80px'}}>
        <Row className=' mt-5 '>
           { wishlist?.length>0?wishlist?.map(product=>(<Col className='mb-5' sm={12} md={16} lg={4} xl={3}>
           <Card className='shadow rounded' style={{width: '18rem'}}>
                    <Link to={`/view/${product.id}`}><Card.Img style={{height:'180px'}} varient='top' src={product.thumbnail}/></Link>
                    <Card.Body>
                        <Card.Title style={{height:"28px"}}>{product.title.slice(0,20)}...</Card.Title>
                        <div className='d-flex justify-content-between'>
                            <Button onClick={()=>dispatch(removeFromWishlist(product.id))} className="btn btn-light fs-5"> <i class="fa-solid fa-heart-circle-xmark text-danger"></i></Button>
                            <Button className="btn btn-light fs-5"> <i className='fa-solid fa-cart-plus text-success'></i> </Button>

                        </div>
                    </Card.Body>
                </Card>
         </Col>
         )
         )
         : 
         <div className='text-center '>
          <img width={'25%'} height={'250px'} src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="" />
          <h1 style={{height:'52px'}} className='mt-3 '>Your Wishlist is Empty!!!</h1>
         </div>}

        </Row>
    </div>
  )
}

export default Wishlist