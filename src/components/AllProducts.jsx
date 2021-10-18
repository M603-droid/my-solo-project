import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllArtworks, addToCart } from '../actions/index'
import { Card, Col, Row, Button , Container} from  'react-bootstrap'
import {addProductToFavorite} from '../actions'
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import './AllProducts.css';




const mapStateToProps = (state) => ({
    favorites: state.favorites.favorite_products,
});

const mapDispatchToProps = (dispatch) => ({
    productToFavorite: (product) => dispatch(addProductToFavorite(product)),
});

const AllProducts = ({productToFavorite }) => {
    const params = useParams();
    const [favoritesArray, setfavoritesArray] = useState([]);


    const dispatch = useDispatch()
    const allProducts = useSelector(state => state.products.all_products)
    console.log(allProducts)

    useEffect(() => {
        dispatch(fetchAllArtworks())
    }, [])

    return (
        <Container>
        <div>
        
            <Row>

{
    allProducts.map((artwork, i) => {
        return (
            <Col sm="3"  className="mb-4 mycards">
                <Card >
                    <Card.Img variant="top" src={artwork.image} width="50px" height="300px" />
                    <Card.Body>
                        <Card.Title className="card-title">{artwork.title}</Card.Title>
                        <span>price {artwork.price} $</span>
                    </Card.Body>
                    <div>
                    <button onClick={() => dispatch(addToCart(artwork))} className="mr-3 ml-0 mb-3">Add to Cart</button>
                    
                    <button
      className="removefavtrackbtn button-light mr-0 ml-5 mb-3" 
      onClick={() => productToFavorite(artwork)}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
    </svg></button>
                    </div>

                    
    
                </Card>
            </Col>
        );
    })}
</Row>
</div>

            </Container>
            
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AllProducts);