import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllArtworks, addToCart } from '../actions/index'
import { Card, Col, Row, Button , Container} from  'react-bootstrap'
import {addProductToFavorite} from '../actions'
import { useParams } from "react-router-dom";
import { connect } from 'react-redux'



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
            <Col sm="3" className="mb-4 mycards">
                <Card >
                    <Card.Img variant="top" src={artwork} width="50px" height="300px" />
                    <Card.Body>
                        <Card.Title className="card-title">{artwork.artist_title}</Card.Title>
                        <span>price {artwork.internal_department_id} $</span>
                    </Card.Body>
                    <div>
                    <button onClick={() => dispatch(addToCart(artwork))} className="ml-0 mr-0">Add to Cart</button>
                    
                    <button
      className="removefavtrackbtn button-light ml-0" 
      onClick={() => productToFavorite(artwork)}> Add to fav</button>
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